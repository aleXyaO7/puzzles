# Ten Sweets, Four Children

**Math** · difficulty ●○○○ · `m07`

In how many ways can $10$ identical sweets be shared among $4$ children, if some children may get none?

<details>
<summary>Hint 1</summary>

Represent a sharing as a row of sweets with dividers between children.

</details>

<details>
<summary>Hint 2</summary>

How many dividers do 4 children need?

</details>

<details>
<summary>Hint 3</summary>

Choose positions for 3 dividers among 13 slots.

</details>

<details>
<summary>Key idea</summary>

Line up the 10 sweets and 3 dividers: each arrangement of 13 symbols is one sharing.

**Tempting dead end:** Splitting into cases by how many children get nothing.

**Techniques:** `stars-and-bars`, `bijection`

</details>

<details>
<summary>Solution</summary>

**Answer: 286**

Each sharing corresponds to a row of 10 stars and 3 bars (the bars separate the children's shares). The count is $\binom{13}{3} = 286$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m07` from the repo root.

```js
function run(){
  let c = 0;
  for (let a = 0; a <= 10; a++) for (let b = 0; a + b <= 10; b++) for (let d = 0; a + b + d <= 10; d++) c++;
  return c; // the fourth child's share is forced
}
```

</details>
