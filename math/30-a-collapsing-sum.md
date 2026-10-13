# A Collapsing Sum

**Math** · difficulty ●○○○ · `m11`

Evaluate $\displaystyle\sum_{k=1}^{99}\frac{1}{k(k+1)}$.

<details>
<summary>Hint 1</summary>

Split $\tfrac1{k(k+1)}$ into a difference of two simpler fractions.

</details>

<details>
<summary>Hint 2</summary>

$\tfrac1{k(k+1)} = \tfrac1k - \tfrac1{k+1}$.

</details>

<details>
<summary>Hint 3</summary>

Write out the first few terms: what cancels?

</details>

<details>
<summary>Key idea</summary>

1/(k(k+1)) = 1/k − 1/(k+1), so the sum telescopes.

**Tempting dead end:** Looking for a pattern in the first few partial sums without explaining it.

**Techniques:** `telescoping`, `partial-fractions`

</details>

<details>
<summary>Solution</summary>

**Answer: 99/100**

$\tfrac1{k(k+1)} = \tfrac1k - \tfrac1{k+1}$. The sum is $(1-\tfrac12)+(\tfrac12-\tfrac13)+\dots+(\tfrac1{99}-\tfrac1{100}) = 1 - \tfrac1{100} = \tfrac{99}{100}$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m11` from the repo root.

```js
function run(){
  // Exact rational arithmetic with BigInt.
  let p = 0n, q = 1n;
  const g = (a, b) => { while (b) [a, b] = [b, a % b]; return a; };
  for (let k = 1n; k <= 99n; k++) { const d = k * (k + 1n); p = p * d + q; q = q * d; const h = g(p, q); p /= h; q /= h; }
  return Number(p) / Number(q);
}
```

</details>
