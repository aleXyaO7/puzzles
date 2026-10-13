# One Reroll Allowed

**Probability** · difficulty ●○○○ · `p12`

You roll a fair die and are paid its value in dollars. After seeing the first roll you may choose to reroll once, in which case you are paid the second roll instead. With optimal play, what is your expected payoff?

<details>
<summary>Hint 1</summary>

Start from the end. What is the second roll worth on average?

</details>

<details>
<summary>Hint 2</summary>

Compare each first roll with that value.

</details>

<details>
<summary>Hint 3</summary>

Keep 4, 5, 6; reroll 1, 2, 3.

</details>

<details>
<summary>Key idea</summary>

Work backwards: a reroll is worth 3.5, so keep the first roll exactly when it beats 3.5.

**Tempting dead end:** Averaging over strategies or trying to optimize both rolls at once.

**Techniques:** `backward-induction`, `optimal-stopping`

</details>

<details>
<summary>Solution</summary>

**Answer: 4.25**

A reroll is worth $3.5$. Keep the first roll when it exceeds $3.5$, i.e. on 4, 5, 6.

$E = \tfrac{4+5+6}{6} + \tfrac36\cdot 3.5 = 2.5 + 1.75 = 4.25$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs p12` from the repo root.

```js
function run(){
  // Try every threshold strategy "keep if roll >= t" and take the best.
  let best = -Infinity;
  for (let t = 1; t <= 7; t++) {
    let e = 0;
    for (let d = 1; d <= 6; d++) e += (d >= t ? d : 3.5) / 6;
    best = Math.max(best, e);
  }
  return best;
}
```

</details>
