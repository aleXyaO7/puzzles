# Subset Sums Divisible by Five

**Math** · difficulty ●●●● · `m21`

How many subsets of $\{1, 2, \dots, 10\}$ (including the empty set) have a sum divisible by $5$?

<details>
<summary>Hint 1</summary>

The subset sums are encoded by $f(x) = \prod_{k=1}^{10}(1+x^k)$. You want the sum of coefficients of $x^{5m}$.

</details>

<details>
<summary>Hint 2</summary>

That sum is $\tfrac15\sum_{j=0}^{4}f(\omega^j)$ with $\omega = e^{2\pi i/5}$.

</details>

<details>
<summary>Hint 3</summary>

For $\omega\ne1$, the exponents $1..10$ hit each residue mod 5 twice. Evaluate $\prod_{r=0}^4(1+\omega^r)$ using $x^5-1 = \prod(x-\omega^r)$ at $x=-1$.

</details>

<details>
<summary>Key idea</summary>

Roots-of-unity filter: average the generating function ∏(1 + x^k) over the 5th roots of unity. For a primitive root the product collapses to 2² = 4.

**Tempting dead end:** Assuming exactly a fifth of the 1024 subsets qualify (1024 isn't divisible by 5).

**Techniques:** `roots-of-unity-filter`, `generating-functions`

</details>

<details>
<summary>Solution</summary>

**Answer: 208**

Let $f(x)=\prod_{k=1}^{10}(1+x^k)$. The count is $\tfrac15\sum_{j=0}^{4} f(\omega^j)$. $f(1)=1024$.

For $j\ne0$, $\omega^j$ is a primitive 5th root, and $1..10$ covers each residue twice: $f(\omega^j) = \left(\prod_{r=0}^{4}(1+\omega^r)\right)^2$. From $\prod_r(x-\omega^r)=x^5-1$ at $x=-1$: $\prod_r(-1-\omega^r) = -2$, so $\prod_r(1+\omega^r) = 2$. Thus $f(\omega^j)=4$.

Count $= \tfrac{1024 + 4\cdot4}{5} = 208$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m21` from the repo root.

```js
function run(){
  let c = 0;
  for (let m = 0; m < 1024; m++) { let s = 0; for (let k = 0; k < 10; k++) if (m >> k & 1) s += k + 1; if (s % 5 === 0) c++; }
  return c;
}
```

</details>
