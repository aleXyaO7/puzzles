# Fixed Sum, Biggest Product

**Math** · difficulty ●○○○ · `m15`

Non-negative real numbers $x, y, z$ satisfy $x + y + z = 12$. What is the largest possible value of $xyz$?

<details>
<summary>Hint 1</summary>

What inequality links a sum and a product?

</details>

<details>
<summary>Hint 2</summary>

$\sqrt[3]{xyz} \le \tfrac{x+y+z}{3}$.

</details>

<details>
<summary>Hint 3</summary>

When does equality hold?

</details>

<details>
<summary>Key idea</summary>

AM–GM: the geometric mean is at most the arithmetic mean 4, with equality when all three are equal.

**Tempting dead end:** Setting up Lagrange multipliers.

**Techniques:** `am-gm`, `smoothing`

</details>

<details>
<summary>Solution</summary>

**Answer: 64**

By AM–GM, $\sqrt[3]{xyz} \le \tfrac{12}{3} = 4$, so $xyz \le 64$, with equality at $x=y=z=4$. (Smoothing view: if two variables differ, replacing both by their average keeps the sum and increases the product.)

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m15` from the repo root.

```js
function run(){
  // Grid search over x, y in steps of 0.01 (z is determined).
  let best = 0;
  for (let i = 0; i <= 1200; i++) for (let j = 0; i + j <= 1200; j++) {
    const x = i / 100, y = j / 100, z = (1200 - i - j) / 100;
    best = Math.max(best, x * y * z);
  }
  return best;
}
```

</details>
