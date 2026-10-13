# Change for a Dollar

**Math** · difficulty ●●○○ · `m13`

In how many ways can you make $100$ cents using pennies, nickels, dimes and quarters (1, 5, 10, 25 cents)? Order doesn't matter.

<details>
<summary>Hint 1</summary>

Pennies can always fill the rest, so they never constrain anything.

</details>

<details>
<summary>Hint 2</summary>

For a remaining amount $r$ after quarters and dimes, how many choices of nickels are there?

</details>

<details>
<summary>Hint 3</summary>

That is $\lfloor r/5\rfloor + 1$. Sum over quarters $q$ and dimes $d$.

</details>

<details>
<summary>Key idea</summary>

Fix the largest coins first: for each choice of quarters and dimes, the nickel count is free and pennies fill the rest, so count nickel options in closed form.

**Tempting dead end:** Counting ordered sequences of coins, which overcounts.

**Techniques:** `nested-casework`, `generating-functions`

</details>

<details>
<summary>Solution</summary>

**Answer: 242**

For $q$ quarters and $d$ dimes with $25q+10d\le100$, the remainder $r = 100-25q-10d$ allows $\lfloor r/5\rfloor+1$ nickel counts, with pennies filling the rest. Summing:
$q=0$: $\sum_{d=0}^{10}(21-2d) = 121$;
$q=1$: $\sum_{d=0}^{7}(16-2d) = 72$;
$q=2$: $\sum_{d=0}^{5}(11-2d) = 36$;
$q=3$: $\sum_{d=0}^{2}(6-2d) = 12$;
$q=4$: $1$.
Total $121+72+36+12+1 = 242$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m13` from the repo root.

```js
function run(){
  let c = 0;
  for (let q = 0; q <= 4; q++) for (let d = 0; d <= 10; d++) for (let n = 0; n <= 20; n++) {
    const p = 100 - 25 * q - 10 * d - 5 * n;
    if (p >= 0) c++;
  }
  return c;
}
```

</details>
