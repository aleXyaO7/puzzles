# The Frog on the Clock

**Probability** · difficulty ●●●○ · `p14`

A frog sits on the $12$ of a clock face. Each minute it jumps to one of the two adjacent hours with equal probability. What is the probability that $6$ is the last hour to be visited for the first time?

<details>
<summary>Hint 1</summary>

When hour 6 is last, where must the frog be just before visiting it?

</details>

<details>
<summary>Hint 2</summary>

Eventually the frog first reaches 5 or 7. Say 5. Hour 6 is last iff it reaches 7 before 6, going the long way round.

</details>

<details>
<summary>Hint 3</summary>

From 5, reaching 7 before 6 is a fair walk on a path of length 11 started one step from the end.

</details>

<details>
<summary>Key idea</summary>

For an hour to be last, the frog must reach one neighbour of it and then go all the way round to the other neighbour first. That probability is the same for every hour.

**Tempting dead end:** Building a Markov chain on (visited arc, position) states.

**Techniques:** `last-visit-argument`, `symmetry`

</details>

<details>
<summary>Solution</summary>

**Answer: 1/11**

The frog will first hit one neighbour of 6, say 5. From then on, 6 is last iff the frog reaches 7 (the long way round) before stepping to 6.

On the 11-step path $6,5,4,\dots,7$, the frog starts 1 step from 6 and 10 from 7. By the fair-walk (gambler's ruin) formula, it reaches 7 first with probability $\tfrac1{11}$. This holds for any target hour, so each of the 11 hours is last with probability $\tfrac1{11}$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p14` from the repo root.

```js
function run(){
  return mc(200000, () => {
    const seen = new Array(12).fill(false); seen[0] = true;
    let pos = 0, count = 1, last = 0;
    while (count < 12) {
      pos = (pos + (Math.random() < 0.5 ? 1 : 11)) % 12;
      if (!seen[pos]) { seen[pos] = true; count++; last = pos; }
    }
    return last === 6 ? 1 : 0;
  });
}
```

</details>
