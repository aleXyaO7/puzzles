# A Hundred Lockers

**Math** · difficulty ●○○○ · `m02`

$100$ closed lockers stand in a row. Student $k$ (for $k = 1,\dots,100$) toggles every locker whose number is a multiple of $k$. How many lockers are open at the end?

<details>
<summary>Hint 1</summary>

Which students touch locker $n$?

</details>

<details>
<summary>Hint 2</summary>

A locker ends open iff it has an odd number of divisors.

</details>

<details>
<summary>Hint 3</summary>

Pair each divisor $d$ with $n/d$. When does this fail?

</details>

<details>
<summary>Key idea</summary>

Locker n is toggled once per divisor; divisors pair up as d and n/d except when n is a perfect square.

**Tempting dead end:** Simulating the first few students looking for a pattern.

**Techniques:** `pairing`, `divisor-parity`

</details>

<details>
<summary>Solution</summary>

**Answer: 10**

Locker $n$ is toggled once per divisor of $n$. Divisors pair as $(d, n/d)$, except that $d=\sqrt n$ pairs with itself. So $n$ has an odd number of divisors iff it is a perfect square. The open lockers are $1,4,9,\dots,100$: $10$ of them.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m02` from the repo root.

```js
function run(){
  const open = new Array(101).fill(false);
  for (let k = 1; k <= 100; k++) for (let n = k; n <= 100; n += k) open[n] = !open[n];
  return open.filter(Boolean).length;
}
```

</details>
