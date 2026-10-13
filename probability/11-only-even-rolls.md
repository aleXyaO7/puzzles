# Only Even Rolls

**Probability** · difficulty ●●●○ · `p11`

You roll a fair die until you get a $6$. Given that every roll you made was even, what is the expected number of rolls?

<details>
<summary>Hint 1</summary>

Conditioning is not the same as changing the die to {2,4,6}. Which runs are being thrown away?

</details>

<details>
<summary>Hint 2</summary>

A run survives exactly when the first roll in $\{1,3,5,6\}$ is a 6.

</details>

<details>
<summary>Hint 3</summary>

Is the time of the first roll in $\{1,3,5,6\}$ independent of which of those four values it is?

</details>

<details>
<summary>Key idea</summary>

The condition really means 'stop at the first roll in {1,3,5,6} and keep only runs that stopped on 6'. The stopping time is independent of which value it stopped on.

**Tempting dead end:** Answering 3 by pretending the die only has faces 2, 4, 6.

**Techniques:** `conditioning`, `reframing-the-process`

</details>

<details>
<summary>Solution</summary>

**Answer: 3/2**

Consider the first roll landing in $S=\{1,3,5,6\}$. The run is kept exactly when that roll is 6. The number of rolls $T$ until hitting $S$ is geometric with $p = \tfrac46$, and the value at $T$ is uniform on $S$ independently of $T$.

So conditioning on "the value was 6" does not change $T$'s distribution: $E[T] = \tfrac64 = \tfrac32$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p11` from the repo root.

```js
function run(){
  return mc(1500000, () => {
    let n = 0;
    while (true) {
      const d = randInt(1, 6); n++;
      if (d === 6) return n;
      if (d % 2 === 1) return null;
    }
  });
}
```

</details>
