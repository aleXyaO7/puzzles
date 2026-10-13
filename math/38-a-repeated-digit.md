# A Repeated Digit

**Math** · difficulty ●○○○ · `m19`

How many four-digit numbers (from $1000$ to $9999$) have at least one repeated digit?

<details>
<summary>Hint 1</summary>

'At least one' is often easier through its opposite.

</details>

<details>
<summary>Hint 2</summary>

Count four-digit numbers with all distinct digits.

</details>

<details>
<summary>Hint 3</summary>

First digit: 9 choices (not 0). Then 9, 8, 7.

</details>

<details>
<summary>Key idea</summary>

Count the complement: four-digit numbers with all digits distinct are 9·9·8·7.

**Tempting dead end:** Casework on which positions repeat and how many times.

**Techniques:** `complementary-counting`

</details>

<details>
<summary>Solution</summary>

**Answer: 4464**

All-distinct four-digit numbers: $9\cdot9\cdot8\cdot7 = 4536$. Total four-digit numbers: $9000$. So $9000 - 4536 = 4464$ have a repeat.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m19` from the repo root.

```js
function run(){
  let c = 0;
  for (let n = 1000; n <= 9999; n++) if (new Set(String(n)).size < 4) c++;
  return c;
}
```

</details>
