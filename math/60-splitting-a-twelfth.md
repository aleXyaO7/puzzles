# Splitting a Twelfth

**Math** · difficulty ●●●○ · `m23`

How many ordered pairs of positive integers $(x, y)$ satisfy $\dfrac1x + \dfrac1y = \dfrac1{12}$?

<details>
<summary>Hint 1</summary>

Multiply through by $12xy$.

</details>

<details>
<summary>Hint 2</summary>

Add a constant to both sides of $xy - 12x - 12y = 0$ so the left side factors.

</details>

<details>
<summary>Hint 3</summary>

$(x-12)(y-12) = 144$. Can the factors be negative? How many divisors does $144$ have?

</details>

<details>
<summary>Key idea</summary>

Clear denominators and complete the product: xy − 12x − 12y = 0 becomes (x − 12)(y − 12) = 144, so solutions match divisors of 144.

**Tempting dead end:** Bounding x and testing values one by one.

**Techniques:** `completing-the-product`, `divisor-counting`

</details>

<details>
<summary>Solution</summary>

**Answer: 15**

$12y + 12x = xy$, so $(x-12)(y-12) = 144$. Both $x, y > 12$ (since $\tfrac1x < \tfrac1{12}$), so both factors are positive. Ordered pairs correspond to positive divisors of $144 = 2^4\cdot3^2$: $(4+1)(2+1) = 15$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m23` from the repo root.

```js
function run(){
  let c = 0;
  for (let x = 1; x <= 100000; x++) {
    const num = 12 * x, den = x - 12;     // y = 12x / (x - 12)
    if (den > 0 && num % den === 0) c++;
  }
  return c;
}
```

</details>
