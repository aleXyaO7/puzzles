# Two Heads in a Row

**Probability** · difficulty ●○○○ · `p02`

You flip a fair coin until you get two heads in a row. What is the expected number of flips?

<details>
<summary>Hint 1</summary>

What is the only thing about the history that matters for the future?

</details>

<details>
<summary>Hint 2</summary>

Let $E_0$ be the expected flips from scratch and $E_1$ the expected flips when the last flip was H.

</details>

<details>
<summary>Hint 3</summary>

Condition on the next flip: $E_1 = 1 + \tfrac12\cdot 0 + \tfrac12 E_0$.

</details>

<details>
<summary>Key idea</summary>

Only your progress toward HH matters, so define the expected remaining flips from each progress state and condition on the next flip.

**Tempting dead end:** Guessing 4 because P(HH) = 1/4 on any given pair of flips. Overlapping pairs are not independent trials.

**Techniques:** `first-step-analysis`, `markov-states`

</details>

<details>
<summary>Solution</summary>

**Answer: 6**

Let $E_0$ = expected flips from a fresh start, $E_1$ = expected flips when the previous flip was H.

$E_0 = 1 + \tfrac12 E_1 + \tfrac12 E_0$ and $E_1 = 1 + \tfrac12\cdot 0 + \tfrac12 E_0$.

Substituting: $E_0 = 1 + \tfrac12(1+\tfrac12E_0) + \tfrac12E_0$, so $\tfrac14 E_0 = \tfrac32$ and $E_0 = 6$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p02` from the repo root.

```js
function run(){
  return mc(300000, () => {
    let n = 0, streak = 0;
    while (streak < 2) { n++; streak = Math.random() < 0.5 ? streak + 1 : 0; }
    return n;
  });
}
```

</details>
