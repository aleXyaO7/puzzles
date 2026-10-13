// Generates README.md and one Markdown page per puzzle from data/*.json.
// Usage: node scripts/build.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const puzzles = fs.readdirSync(path.join(root, "data"))
  .filter(f => f.endsWith(".json"))
  .map(f => JSON.parse(fs.readFileSync(path.join(root, "data", f), "utf8")))
  .sort((a, b) => a.n - b.n);

const slug = s => s.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const pagePath = p => `${p.category}/${String(p.n).padStart(2, "0")}-${slug(p.title)}.md`;
const stars = d => "●".repeat(d) + "○".repeat(4 - d);
const CAT = { math: "Math", probability: "Probability", logic: "Logic" };
// GitHub renders $...$ math; "\$" is a literal dollar sign.
const fold = (summary, body) => `<details>\n<summary>${summary}</summary>\n\n${body}\n\n</details>\n`;

for (const dir of Object.keys(CAT)) {
  fs.rmSync(path.join(root, dir), { recursive: true, force: true });
  fs.mkdirSync(path.join(root, dir));
}

for (const p of puzzles) {
  const md = [
    `# ${p.title}`,
    "",
    `**${CAT[p.category]}** · difficulty ${stars(p.difficulty)} · \`${p.id}\``,
    "",
    p.statement,
    "",
    ...p.hints.map((h, i) => fold(`Hint ${i + 1}`, h)),
    fold("Key idea", `${p.insight}\n\n**Tempting dead end:** ${p.redHerring}\n\n**Techniques:** ${p.techniques.map(t => `\`${t}\``).join(", ")}`),
    fold("Solution", `**Answer: ${p.answer}**\n\n${p.solution}`),
    fold(`Independent check (${p.verify.kind === "exact" ? "exhaustive computation" : "simulation"})`,
      "Run `node scripts/verify.mjs " + p.id + "` from the repo root.\n\n```js\n" + p.verify.code + "\n```"),
  ].join("\n");
  fs.writeFileSync(path.join(root, pagePath(p)), md);
}

const table = cat => [
  "| # | Puzzle | Difficulty |",
  "|---|---|---|",
  ...puzzles.filter(p => p.category === cat).map(p => `| ${p.n} | [${p.title}](${pagePath(p)}) | ${stars(p.difficulty)} |`),
].join("\n");

const techniques = new Map();
for (const p of puzzles) for (const t of p.techniques) techniques.set(t, (techniques.get(t) || 0) + 1);

const readme = `# Puzzles

Ad hoc math, logic and quant-interview probability puzzles. Each one is cracked by a different key idea, and each answer comes with code that recomputes it independently, by exhaustive computation or by simulation, without using the written solution.

${puzzles.length} puzzles, ${techniques.size} distinct techniques. Hints, key ideas and solutions are folded on each page so you can attempt the puzzle first.

Difficulty runs from ●○○○ (warm-up) to ●●●● (hard).

## Probability

${table("probability")}

## Logic

${table("logic")}

## Math

${table("math")}

## Checking the answers

\`\`\`bash
node scripts/verify.mjs          # every puzzle
node scripts/verify.mjs p07 m06  # specific puzzles
\`\`\`

Exact checks must match the stored answer exactly. Simulations must land within 4 standard errors of it.

## Adding a puzzle

1. Add \`data/<id>.json\` with the same fields as the existing files. \`verify.code\` defines \`run()\`, which returns a number (exact) or the result of \`mc(trials, fn)\` (simulation). Helpers are in \`scripts/prelude.js\`.
2. Run \`node scripts/verify.mjs <id>\`.
3. Run \`node scripts/build.mjs\` to regenerate this README and the puzzle pages.
`;
fs.writeFileSync(path.join(root, "README.md"), readme);
console.log(`Wrote README.md and ${puzzles.length} puzzle pages`);
