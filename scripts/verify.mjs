// Runs every puzzle's independent check and compares it with the stored answer.
// Usage: node scripts/verify.mjs [id ...]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const prelude = fs.readFileSync(path.join(root, "scripts", "prelude.js"), "utf8");
const only = new Set(process.argv.slice(2));

const puzzles = fs.readdirSync(path.join(root, "data"))
  .filter(f => f.endsWith(".json"))
  .map(f => JSON.parse(fs.readFileSync(path.join(root, "data", f), "utf8")))
  .filter(p => !only.size || only.has(p.id))
  .sort((a, b) => a.n - b.n);

let failures = 0;
for (const p of puzzles) {
  const t0 = Date.now();
  let ok, detail;
  try {
    const res = new Function(prelude + "\n" + p.verify.code + "\nreturn run();")();
    if (typeof res === "number") {
      ok = Math.abs(res - p.answerValue) <= 1e-9 * Math.max(1, Math.abs(p.answerValue));
      detail = `computed ${res}`;
    } else {
      const z = (res.mean - p.answerValue) / res.se;
      ok = Math.abs(z) <= 4;
      detail = `simulated ${res.mean.toFixed(5)} ± ${res.se.toFixed(5)} (z = ${z.toFixed(2)}, n = ${res.n})`;
    }
  } catch (e) {
    ok = false;
    detail = `error: ${e.message}`;
  }
  if (!ok) failures++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${p.id}  ${p.title} — claimed ${p.answer}; ${detail} [${Date.now() - t0} ms]`);
}
console.log(failures ? `\n${failures} of ${puzzles.length} failed` : `\nAll ${puzzles.length} passed`);
process.exit(failures ? 1 : 0);
