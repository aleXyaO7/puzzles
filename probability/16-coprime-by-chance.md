# Coprime by Chance

**Probability** · difficulty ●●●○ · `p16`

Two positive integers are chosen independently and uniformly from $\{1,\dots,N\}$. As $N\to\infty$, what does the probability that they are coprime approach? (Give a decimal.)

<details>
<summary>Hint 1</summary>

What is the probability that a fixed prime $p$ divides both numbers?

</details>

<details>
<summary>Hint 2</summary>

Coprime means this fails for every prime. Treat the primes as independent.

</details>

<details>
<summary>Hint 3</summary>

$\prod_p (1 - p^{-2}) = 1/\zeta(2)$, and $\zeta(2) = \pi^2/6$.

</details>

<details>
<summary>Key idea</summary>

Coprime means no prime divides both; divisibility by different primes is asymptotically independent, so multiply (1 − 1/p²) over primes.

**Tempting dead end:** Counting pairs with gcd 1 directly with inclusion–exclusion over all integers, without seeing the product.

**Techniques:** `independence-over-primes`, `euler-product`

</details>

<details>
<summary>Solution</summary>

**Answer: 6/π² ≈ 0.6079**

A prime $p$ divides both numbers with probability $\tfrac1{p^2}$, and these events are asymptotically independent across primes. So

$P(\text{coprime}) = \prod_p\left(1 - \tfrac1{p^2}\right) = \tfrac1{\zeta(2)} = \tfrac6{\pi^2} \approx 0.6079$,

using the Euler product $\zeta(s) = \prod_p (1-p^{-s})^{-1}$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p16` from the repo root.

```js
function run(){
  const N = 1e9;
  return mc(400000, () => gcd(randInt(1, N), randInt(1, N)) === 1 ? 1 : 0);
}
```

</details>
