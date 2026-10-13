# One Step from the Cliff

**Probability** · difficulty ●●●○ · `p25`

A drunk stands one step from the edge of a cliff. Each step, they move toward the cliff with probability $\tfrac13$ and away from it with probability $\tfrac23$, independently. What is the probability that they eventually fall off?

<details>
<summary>Hint 1</summary>

Let $P$ be the probability of ever reaching the edge from 1 step away.

</details>

<details>
<summary>Hint 2</summary>

From 2 steps away, reaching the edge requires first reaching 1 step away. What is the probability of that?

</details>

<details>
<summary>Hint 3</summary>

$P = \tfrac13 + \tfrac23P^2$. Which root is the right one?

</details>

<details>
<summary>Key idea</summary>

Getting from 2 steps away to the edge means getting one step closer twice. That gives the self-similar equation P = 1/3 + (2/3)P².

**Tempting dead end:** Summing over all path lengths with a combinatorial count of paths.

**Techniques:** `self-similarity`, `first-step-analysis`

</details>

<details>
<summary>Solution</summary>

**Answer: 1/2**

Let $P$ = probability of ever moving one step closer, starting anywhere. From 2 steps away, you need to do this twice, independently: $P^2$.

So $P = \tfrac13 + \tfrac23P^2$, i.e. $2P^2 - 3P + 1 = 0$, giving $P\in\{\tfrac12, 1\}$. Because the walk drifts away from the cliff, $P<1$. A standard argument shows the true value is the smallest non-negative root. So $P = \tfrac12$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p25` from the repo root.

```js
function run(){
  // Stop once he is 80 steps away; falling from there has probability 2^-80.
  return mc(300000, () => {
    let d = 1;
    while (d > 0 && d < 80) d += Math.random() < 1 / 3 ? -1 : 1;
    return d === 0 ? 1 : 0;
  });
}
```

</details>
