# A Hundred Prisoners, A Hundred Boxes

**Probability** · difficulty ●●●● · `p20`

$100$ numbered prisoners must each find their own number among $100$ closed boxes. The boxes hold the numbers $1$ to $100$ in a uniformly random arrangement. One at a time, each prisoner may open $50$ boxes, then leaves without communicating. Everyone is freed only if every prisoner finds their number. Before starting they may agree on a strategy. Using the optimal strategy, what is their probability of success? (Give a decimal.)

<details>
<summary>Hint 1</summary>

Random guessing gives $(1/2)^{100}$. You want the prisoners to succeed or fail together.

</details>

<details>
<summary>Hint 2</summary>

Treat the boxes as a permutation: box $i$ points to the number inside it. Start at your own box and keep following.

</details>

<details>
<summary>Hint 3</summary>

Following from your own box, you find your number within the length of your cycle. When does everyone succeed? Count permutations with a cycle longer than 50.

</details>

<details>
<summary>Key idea</summary>

Each prisoner opens their own box and then follows the numbers inside. Everyone succeeds exactly when the permutation has no cycle longer than 50.

**Tempting dead end:** Assuming independence gives (1/2)^100. The point is to make the prisoners' successes and failures happen together.

**Techniques:** `cycle-structure`, `correlate-the-failures`

</details>

<details>
<summary>Solution</summary>

**Answer: 1 − (H₁₀₀ − H₅₀) ≈ 0.3118**

Prisoner $i$ opens box $i$, then the box whose number they just saw, and so on. They are walking around the cycle that contains $i$, so they find $i$ within 50 steps iff that cycle has length $\le 50$. Everyone succeeds iff the permutation has no cycle longer than 50.

At most one cycle can be longer than 50. The number of permutations of $n=100$ with a cycle of length $k>50$ is $\binom{n}{k}(k-1)!(n-k)! = \tfrac{n!}{k}$, so the probability of such a cycle is $\tfrac1k$.

$P(\text{success}) = 1 - \sum_{k=51}^{100}\tfrac1k \approx 1 - \ln 2 \approx 0.3118$. This strategy is known to be optimal.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p20` from the repo root.

```js
function run(){
  // Simulates the cycle-following strategy literally: each prisoner opens up to 50 boxes.
  const n = 100;
  return mc(40000, () => {
    const box = shuffle(range(0, n - 1));
    for (let p = 0; p < n; p++) {
      let b = p, found = false;
      for (let t = 0; t < n / 2; t++) { if (box[b] === p) { found = true; break; } b = box[b]; }
      if (!found) return 0;
    }
    return 1;
  });
}
```

</details>
