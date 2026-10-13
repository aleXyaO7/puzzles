# Ten Islanders Accuse

**Logic** · difficulty ●●●○ · `l01`

On an island, knights always tell the truth and knaves always lie. Ten islanders stand in a row. For each $k = 1, 2, \dots, 10$, the $k$-th islander says: "At least $k$ of us ten are knaves." How many of the ten are knaves?

<details>
<summary>Hint 1</summary>

Suppose there are exactly $K$ knaves. Which statements are true?

</details>

<details>
<summary>Hint 2</summary>

Statement $k$ is true iff $k \le K$. So how many knights are there?

</details>

<details>
<summary>Hint 3</summary>

Knights plus knaves must be 10.

</details>

<details>
<summary>Key idea</summary>

If K are knaves, exactly the islanders with k ≤ K are telling the truth, so there are K knights. Consistency forces K = 10 − K.

**Tempting dead end:** Testing islanders one at a time, as if their claims were independent.

**Techniques:** `self-reference`, `fixed-point-consistency`

</details>

<details>
<summary>Solution</summary>

**Answer: 5**

With $K$ knaves, statement $k$ is true iff $k\le K$, so exactly $K$ statements are true and there are $K$ knights. Then $K + K = 10$, so $K = 5$. Islanders 1–5 are knights and 6–10 are knaves, which checks out.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs l01` from the repo root.

```js
function run(){
  // Try every knight/knave assignment; keep the consistent ones.
  const answers = new Set();
  for (let m = 0; m < 1024; m++) {
    let knaves = 0; for (let k = 0; k < 10; k++) if (m >> k & 1) knaves++;
    let ok = true;
    for (let k = 1; k <= 10; k++) { const knight = !(m >> (k - 1) & 1), claim = knaves >= k; if (knight !== claim) { ok = false; break; } }
    if (ok) answers.add(knaves);
  }
  return answers.size === 1 ? [...answers][0] : NaN;
}
```

</details>
