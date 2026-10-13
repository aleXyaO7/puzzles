# Zeros at the End of 100!

**Math** · difficulty ●○○○ · `m04`

How many zeros does $100!$ end with?

<details>
<summary>Hint 1</summary>

A trailing zero is a factor of 10. Which prime is the bottleneck?

</details>

<details>
<summary>Hint 2</summary>

Count multiples of 5 up to 100.

</details>

<details>
<summary>Hint 3</summary>

Numbers like 25 and 75 contribute two fives.

</details>

<details>
<summary>Key idea</summary>

Each trailing zero needs a factor 10 = 2·5, and fives are scarcer. Count multiples of 5, then extra fives from multiples of 25.

**Tempting dead end:** Counting multiples of 10 only (giving 10 or 11).

**Techniques:** `prime-counting`, `legendre-formula`

</details>

<details>
<summary>Solution</summary>

**Answer: 24**

Trailing zeros = number of factors of 5 in $100!$ (twos are plentiful): $\lfloor 100/5\rfloor + \lfloor 100/25\rfloor = 20 + 4 = 24$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m04` from the repo root.

```js
function run(){
  let f = 1n; for (let i = 1n; i <= 100n; i++) f *= i;
  const s = f.toString(); let z = 0;
  for (let i = s.length - 1; s[i] === "0"; i--) z++;
  return z;
}
```

</details>
