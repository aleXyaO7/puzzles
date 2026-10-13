# Every Face of the Die

**Probability** · difficulty ●○○○ · `p05`

You roll a fair six-sided die until every face has appeared at least once. What is the expected number of rolls?

<details>
<summary>Hint 1</summary>

Break the process into stages by how many distinct faces you have seen.

</details>

<details>
<summary>Hint 2</summary>

Once you have seen $k$ faces, what is the chance the next roll is new?

</details>

<details>
<summary>Hint 3</summary>

A geometric wait with success probability $p$ has mean $1/p$.

</details>

<details>
<summary>Key idea</summary>

Split the wait into phases: after seeing k faces, the wait for a new one is geometric with success probability (6−k)/6.

**Tempting dead end:** Trying to compute the probability that all faces have appeared within n rolls and summing tails.

**Techniques:** `phase-decomposition`, `geometric-waiting-times`

</details>

<details>
<summary>Solution</summary>

**Answer: 14.7**

After $k$ distinct faces, each roll is new with probability $\tfrac{6-k}{6}$, so that phase lasts $\tfrac{6}{6-k}$ rolls on average.

Total: $6\left(\tfrac16+\tfrac15+\tfrac14+\tfrac13+\tfrac12+1\right) = 6\cdot 2.45 = 14.7$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p05` from the repo root.

```js
function run(){
  return mc(300000, () => {
    const seen = new Set(); let n = 0;
    while (seen.size < 6) { seen.add(randInt(1, 6)); n++; }
    return n;
  });
}
```

</details>
