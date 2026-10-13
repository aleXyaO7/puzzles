# Twelve Coins, One Fake

**Logic** · difficulty ●●●● · `l02`

You have $12$ coins that look identical. One is counterfeit and is either slightly heavier or slightly lighter than the others; you don't know which. Using a balance scale, what is the minimum number of weighings that always identifies the counterfeit coin and whether it is heavy or light?

<details>
<summary>Hint 1</summary>

How many different answers are possible? How many outcomes does a weighing have?

</details>

<details>
<summary>Hint 2</summary>

$3^2 = 9 < 24 \le 27 = 3^3$. So 3 is a lower bound. Can every weighing split possibilities nearly into thirds?

</details>

<details>
<summary>Hint 3</summary>

Start with 4 against 4. If they balance, the fake is among the other 4 and you have 8 known-good coins to help.

</details>

<details>
<summary>Key idea</summary>

There are 24 possibilities and each weighing has 3 outcomes, so 3 weighings (27 outcomes) is the lower bound. Achieve it by making every weighing split the remaining possibilities as evenly as possible, using known-genuine coins as filler.

**Tempting dead end:** Splitting the coins in halves (6 against 6), which wastes the third outcome.

**Techniques:** `information-counting`, `ternary-splitting`

</details>

<details>
<summary>Solution</summary>

**Answer: 3**

Lower bound: 24 possibilities (12 coins × heavy/light), and 2 weighings give at most $3^2=9$ outcomes. So at least 3 weighings are needed.

Strategy: weigh 1234 against 5678.
• Balanced: the fake is in 9–12 (8 possibilities). Weigh 9,10,11 against three good coins. Balanced → 12 is fake; weigh it against a good coin. Unbalanced → you know heavy or light; weigh 9 against 10.
• Left heavy: either one of 1–4 is heavy or one of 5–8 is light (8 possibilities). Weigh 1,2,5 against 3,6,good. Left heavy → 1 or 2 heavy, or 6 light; weigh 1 against 2. Right heavy → 3 heavy or 5 light; weigh 3 against good. Balanced → 4 heavy, or 7 or 8 light; weigh 7 against 8.
Every case finishes in 3 weighings.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs l02` from the repo root.

```js
function run(){
  // Exhaustive search over all weighings. Coins are grouped as
  // u = completely unknown, h = could only be heavy, l = could only be light, g = known genuine.
  const memo = new Map();
  function solvable(u, h, l, g, k) {
    const poss = 2 * u + h + l;
    if (poss <= 1) return true;
    if (k === 0 || poss > Math.pow(3, k)) return false;
    const key = [u, h, l, g, k].join(",");
    if (memo.has(key)) return memo.get(key);
    let ok = false;
    search:
    for (let u1 = 0; u1 <= u; u1++) for (let u2 = 0; u1 + u2 <= u; u2++)
    for (let h1 = 0; h1 <= h; h1++) for (let h2 = 0; h1 + h2 <= h; h2++)
    for (let l1 = 0; l1 <= l; l1++) for (let l2 = 0; l1 + l2 <= l; l2++) {
      const L = u1 + h1 + l1, R = u2 + h2 + l2;
      if (L + R === 0 || Math.abs(L - R) > g) continue;
      const g2 = g + (u1 + u2) + (h1 + h2) + (l1 + l2);
      const bal = solvable(u - u1 - u2, h - h1 - h2, l - l1 - l2, g2, k - 1);
      if (!bal) continue;
      const leftHeavy = solvable(0, u1 + h1, u2 + l2, 12 - (u1 + h1 + u2 + l2), k - 1);
      if (!leftHeavy) continue;
      const rightHeavy = solvable(0, u2 + h2, u1 + l1, 12 - (u2 + h2 + u1 + l1), k - 1);
      if (rightHeavy) { ok = true; break search; }
    }
    memo.set(key, ok);
    return ok;
  }
  for (let k = 0; k <= 5; k++) if (solvable(12, 0, 0, 0, k)) return k;
  return NaN;
}
```

</details>
