# Cycles in a Shuffle

**Probability** · difficulty ●●○○ · `p18`

A permutation of $\{1,\dots,10\}$ is chosen uniformly at random. What is the expected number of cycles in it? (Fixed points count as cycles of length 1.)

<details>
<summary>Hint 1</summary>

Generate the permutation by tracing cycles: start at 1 and follow $i \to \pi(i)$.

</details>

<details>
<summary>Hint 2</summary>

When $k$ elements are still unused (including the current cycle's start), what is the chance the next step closes the cycle?

</details>

<details>
<summary>Hint 3</summary>

Add up those probabilities.

</details>

<details>
<summary>Key idea</summary>

Build the permutation by following a cycle: at each step, the next element closes the current cycle with probability 1/(remaining).

**Tempting dead end:** Counting permutations by cycle type with Stirling numbers.

**Techniques:** `sequential-construction`, `linearity-of-expectation`

</details>

<details>
<summary>Solution</summary>

**Answer: H₁₀ = 7381/2520 ≈ 2.929**

Trace cycles: start at the smallest unused element and repeatedly choose its image among the $k$ elements still available, one of which is the cycle's start. Choosing the start closes the cycle, with probability $\tfrac1k$. $k$ runs through $10, 9, \dots, 1$, so

$E[\#\text{cycles}] = \sum_{k=1}^{10}\tfrac1k = H_{10} = \tfrac{7381}{2520}\approx 2.929$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p18` from the repo root.

```js
function run(){
  const n = 10;
  return mc(300000, () => {
    const p = shuffle(range(0, n - 1)), seen = new Array(n).fill(false);
    let c = 0;
    for (let i = 0; i < n; i++) if (!seen[i]) { c++; let j = i; while (!seen[j]) { seen[j] = true; j = p[j]; } }
    return c;
  });
}
```

</details>
