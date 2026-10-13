# Free of 2, 3 and 5

**Math** · difficulty ●○○○ · `m10`

How many integers from $1$ to $1000$ are divisible by none of $2$, $3$, $5$?

<details>
<summary>Hint 1</summary>

Count the complement: numbers divisible by at least one of 2, 3, 5.

</details>

<details>
<summary>Hint 2</summary>

$|A\cup B\cup C| = \sum|A| - \sum|A\cap B| + |A\cap B\cap C|$.

</details>

<details>
<summary>Hint 3</summary>

Use $\lfloor 1000/d \rfloor$ for $d = 2,3,5,6,10,15,30$.

</details>

<details>
<summary>Key idea</summary>

Inclusion–exclusion: subtract each divisibility class, add back pairwise overlaps, subtract the triple overlap.

**Tempting dead end:** Using the density 1000·(1/2)(2/3)(4/5) = 266.67 and rounding. Close, but you need the exact floor counts.

**Techniques:** `inclusion-exclusion`

</details>

<details>
<summary>Solution</summary>

**Answer: 266**

Divisible by at least one: $500 + 333 + 200 - 166 - 100 - 66 + 33 = 734$. So $1000 - 734 = 266$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m10` from the repo root.

```js
function run(){
  let c = 0;
  for (let n = 1; n <= 1000; n++) if (n % 2 && n % 3 && n % 5) c++;
  return c;
}
```

</details>
