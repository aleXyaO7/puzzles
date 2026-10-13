# All the Digits

**Math** · difficulty ●●○○ · `m09`

What is the sum of all the digits of all the integers from $1$ to $999{,}999$?

<details>
<summary>Hint 1</summary>

Including 0 and padding to 6 digits doesn't change the digit sum.

</details>

<details>
<summary>Hint 2</summary>

Among 000000–999999, how often does each digit appear in a given position?

</details>

<details>
<summary>Hint 3</summary>

Each position contributes $100{,}000 \cdot (0+1+\dots+9)$.

</details>

<details>
<summary>Key idea</summary>

Pad every number to six digits with leading zeros: then each position runs through 0–9 equally often.

**Tempting dead end:** Summing digit totals block by block for 1–9, 10–99, 100–999, ...

**Techniques:** `padding-symmetry`, `uniform-digit-distribution`

</details>

<details>
<summary>Solution</summary>

**Answer: 27,000,000**

Write $0,\dots,999{,}999$ as six-digit strings. Each position shows each digit $10^5$ times. Total: $6 \cdot 10^5 \cdot 45 = 27{,}000{,}000$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m09` from the repo root.

```js
function run(){
  let s = 0;
  for (let n = 1; n <= 999999; n++) { let x = n; while (x) { s += x % 10; x = (x / 10) | 0; } }
  return s;
}
```

</details>
