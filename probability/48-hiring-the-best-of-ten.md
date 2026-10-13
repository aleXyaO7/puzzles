# Hiring the Best of Ten

**Probability** · difficulty ●●●● · `p28`

$10$ candidates are interviewed in uniformly random order. After each interview you know only how the candidate ranks among those seen so far. You must hire or reject on the spot, and you can't return to a rejected candidate. You want to maximise the probability of hiring the single best candidate. What is that maximum probability? (Give a decimal.)

<details>
<summary>Hint 1</summary>

You should only ever hire a candidate who is the best so far. If candidate $i$ is the best so far, what is the chance they are best overall?

</details>

<details>
<summary>Hint 2</summary>

That chance, $i/n$, grows with $i$, while the value of waiting shrinks. So the best rule is a cutoff.

</details>

<details>
<summary>Hint 3</summary>

With cutoff $r$, the rule wins iff the best overall is at some $j\ge r$ and the best among the first $j-1$ is among the first $r-1$. Sum over $j$.

</details>

<details>
<summary>Key idea</summary>

Only hiring someone who is the best so far can be right, and the i-th candidate being best so far is independent of the earlier order, so the optimal rule is a cutoff: reject the first r−1, then take the first best-so-far.

**Tempting dead end:** Simulating many ad hoc rules instead of first proving the optimal rule must be a cutoff.

**Techniques:** `optimal-stopping`, `threshold-rule`

</details>

<details>
<summary>Solution</summary>

**Answer: 0.3 · (H₉ − H₂) ≈ 0.3987**

If candidate $i$ is the best so far, they are best overall with probability $\tfrac in$. Stopping becomes more attractive over time while continuing becomes less valuable, so the optimal rule is: reject the first $r-1$, then hire the first candidate who beats all before.

With cutoff $r$: the best overall is at position $j\ge r$ (probability $\tfrac1n$ each), and you reach it iff the best among the first $j-1$ is among the first $r-1$ (probability $\tfrac{r-1}{j-1}$). So $P(r) = \tfrac{r-1}{n}\sum_{j=r}^{n}\tfrac1{j-1}$.

For $n=10$ this is maximised at $r=4$: $P = \tfrac3{10}\left(\tfrac13+\dots+\tfrac19\right) \approx 0.3987$. As $n\to\infty$ it tends to $1/e$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs p28` from the repo root.

```js
function run(){
  // Backward induction over all stopping rules (not only cutoffs).
  // W = value of optimal play from just before candidate i+1 is seen.
  const n = 10; let W = 0;
  for (let i = n; i >= 1; i--) W = (1 / i) * Math.max(i / n, W) + (1 - 1 / i) * W;
  return W;
}
```

</details>
