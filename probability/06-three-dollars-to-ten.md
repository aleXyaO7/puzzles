# Three Dollars to Ten

**Probability** · difficulty ●●○○ · `p06`

You start with \$3 and repeatedly bet \$1 on fair coin flips. You stop when you reach \$0 or \$10. What is the probability you reach \$10?

<details>
<summary>Hint 1</summary>

What is your expected fortune after one bet? After many bets?

</details>

<details>
<summary>Hint 2</summary>

When you stop, your fortune is either 0 or 10.

</details>

<details>
<summary>Hint 3</summary>

Set the expected final fortune equal to the starting fortune.

</details>

<details>
<summary>Key idea</summary>

A fair game keeps your expected fortune constant, including at the stopping time, so 10·p = 3.

**Tempting dead end:** Writing the 9 linear equations for each starting fortune and solving the system by hand.

**Techniques:** `martingale`, `optional-stopping`

</details>

<details>
<summary>Solution</summary>

**Answer: 3/10**

Each bet is fair, so your expected fortune never changes. The game stops in finite time with a bounded fortune, so the expected final fortune is still \$3 (optional stopping).

If $p$ is the chance of reaching \$10, the expected final fortune is $10p + 0(1-p) = 3$, so $p = \tfrac{3}{10}$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p06` from the repo root.

```js
function run(){
  return mc(300000, () => {
    let x = 3;
    while (x > 0 && x < 10) x += Math.random() < 0.5 ? 1 : -1;
    return x === 10 ? 1 : 0;
  });
}
```

</details>
