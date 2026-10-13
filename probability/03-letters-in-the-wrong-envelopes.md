# Letters in the Wrong Envelopes

**Probability** · difficulty ●○○○ · `p03`

A secretary puts $100$ letters into $100$ addressed envelopes completely at random, one letter per envelope. What is the expected number of letters that end up in their correct envelope?

<details>
<summary>Hint 1</summary>

Write the number of correct letters as a sum of 100 simpler random variables.

</details>

<details>
<summary>Hint 2</summary>

Let $I_k = 1$ if letter $k$ is correct. What is $E[I_k]$?

</details>

<details>
<summary>Hint 3</summary>

Expectation is linear even when the $I_k$ are dependent.

</details>

<details>
<summary>Key idea</summary>

Write the count as a sum of indicators, one per letter. Linearity of expectation ignores the dependence between them.

**Tempting dead end:** Computing the full distribution of fixed points (derangement numbers) before taking the mean.

**Techniques:** `linearity-of-expectation`, `indicators`

</details>

<details>
<summary>Solution</summary>

**Answer: 1**

Let $I_k$ indicate that letter $k$ lands in its own envelope. Letter $k$ is equally likely to be in any of the 100 envelopes, so $E[I_k] = \tfrac1{100}$.

$E\left[\sum I_k\right] = \sum E[I_k] = 100\cdot\tfrac1{100} = 1$. The $I_k$ are dependent, but linearity does not care.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p03` from the repo root.

```js
function run(){
  const n = 100;
  return mc(60000, () => {
    const p = shuffle(range(0, n - 1));
    let c = 0; for (let i = 0; i < n; i++) if (p[i] === i) c++;
    return c;
  });
}
```

</details>
