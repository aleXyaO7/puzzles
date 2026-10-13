# The Last Digit of 7²⁰²⁶

**Math** · difficulty ●○○○ · `m03`

What is the last digit of $7^{2026}$?

<details>
<summary>Hint 1</summary>

Write out the last digits of $7^1, 7^2, 7^3, 7^4, 7^5$.

</details>

<details>
<summary>Hint 2</summary>

The pattern repeats every 4. What is $2026 \bmod 4$?

</details>

<details>
<summary>Hint 3</summary>

$2026 \equiv 2 \pmod 4$.

</details>

<details>
<summary>Key idea</summary>

Last digits of powers of 7 cycle with period 4: 7, 9, 3, 1.

**Tempting dead end:** Reaching for Euler's theorem mod 10 when a short cycle is visible directly.

**Techniques:** `cyclicity`, `modular-arithmetic`

</details>

<details>
<summary>Solution</summary>

**Answer: 9**

Last digits of $7^n$: $7, 9, 3, 1, 7, \dots$, period 4. Since $2026 = 4\cdot506 + 2$, the last digit matches $7^2 = 49$: it is $9$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m03` from the repo root.

```js
function run(){
  return Number((7n ** 2026n) % 10n);
}
```

</details>
