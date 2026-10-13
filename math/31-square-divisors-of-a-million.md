# Square Divisors of a Million

**Math** · difficulty ●○○○ · `m12`

How many positive divisors of $1{,}000{,}000$ are perfect squares?

<details>
<summary>Hint 1</summary>

Factor $10^6$ into primes.

</details>

<details>
<summary>Hint 2</summary>

Every divisor is $2^a 5^b$ with $0\le a,b\le 6$.

</details>

<details>
<summary>Hint 3</summary>

When is $2^a5^b$ a perfect square?

</details>

<details>
<summary>Key idea</summary>

A divisor 2^a·5^b of 2^6·5^6 is a square iff a and b are both even: 4 choices each.

**Tempting dead end:** Listing divisors and checking each one.

**Techniques:** `prime-exponent-coordinates`

</details>

<details>
<summary>Solution</summary>

**Answer: 16**

$10^6 = 2^6 5^6$. A divisor $2^a5^b$ is a square iff $a, b$ are even, so $a,b\in\{0,2,4,6\}$. That gives $4\times4 = 16$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m12` from the repo root.

```js
function run(){
  let c = 0;
  for (let d = 1; d <= 1e6; d++) if (1e6 % d === 0) { const s = Math.round(Math.sqrt(d)); if (s * s === d) c++; }
  return c;
}
```

</details>
