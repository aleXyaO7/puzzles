# Rounds of Hat Swapping

**Probability** · difficulty ●●●● · `p27`

$10$ people throw their hats into a pile. Each round, everyone still present grabs a uniformly random hat from the pile (a random permutation of the remaining hats). Everyone who got their own hat leaves with it; everyone else throws their hat back. What is the expected number of rounds until everyone has left?

<details>
<summary>Hint 1</summary>

How many people leave in one round, on average, whatever the number present?

</details>

<details>
<summary>Hint 2</summary>

Let $X_t$ be the number present after $t$ rounds. What is $E[X_{t+1}\mid X_t]$ when $X_t>0$?

</details>

<details>
<summary>Hint 3</summary>

Look for a quantity combining $X_t$ and $t$ whose expected value never changes.

</details>

<details>
<summary>Key idea</summary>

Each round removes 1 person on average (expected fixed points = 1), so X_t + t is a martingale and the expected stopping time equals the starting count.

**Tempting dead end:** Writing a recursion over the number of people remaining, which needs the full derangement distribution.

**Techniques:** `martingale`, `linearity-of-expectation`

</details>

<details>
<summary>Solution</summary>

**Answer: 10**

With $m\ge1$ people present, the expected number who get their own hat is exactly $1$, whatever $m$ is. So $M_t = X_t + t$ is a martingale until everyone has left.

At the stopping time $T$, $X_T = 0$. By optional stopping, $E[T] = E[M_T] = M_0 = 10$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p27` from the repo root.

```js
function run(){
  return mc(150000, () => {
    let people = range(0, 9), rounds = 0;
    while (people.length) {
      rounds++;
      const hats = shuffle(people.slice());
      people = people.filter((p, i) => hats[i] !== p);
    }
    return rounds;
  });
}
```

</details>
