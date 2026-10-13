# Sum Over All Subsets

**Math** · difficulty ●●○○ · `m20`

For each of the $1024$ subsets of $\{1, 2, \dots, 10\}$, add up its elements (the empty set has sum $0$). What is the total of all these sums?

<details>
<summary>Hint 1</summary>

Instead of going subset by subset, go element by element.

</details>

<details>
<summary>Hint 2</summary>

In how many subsets does the element 7 appear?

</details>

<details>
<summary>Hint 3</summary>

Each element appears in $2^9 = 512$ subsets.

</details>

<details>
<summary>Key idea</summary>

Swap the order of summation: each element appears in exactly 2^9 subsets, so the total is 512·(1+…+10).

**Tempting dead end:** Grouping subsets by size and summing over each size.

**Techniques:** `double-counting`, `swap-summation-order`

</details>

<details>
<summary>Solution</summary>

**Answer: 28,160**

Count each element's contribution: element $k$ appears in $2^9 = 512$ subsets (choose freely whether each other element is in). Total $= 512\cdot(1+\dots+10) = 512\cdot55 = 28{,}160$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m20` from the repo root.

```js
function run(){
  let t = 0;
  for (let m = 0; m < 1024; m++) for (let k = 0; k < 10; k++) if (m >> k & 1) t += k + 1;
  return t;
}
```

</details>
