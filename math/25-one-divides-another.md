# One Divides Another

**Math** · difficulty ●●●○ · `m06`

What is the smallest $n$ such that every $n$-element subset of $\{1,2,\dots,100\}$ contains two distinct numbers, one of which divides the other?

<details>
<summary>Hint 1</summary>

First find a large set with no divisibility pairs. Try the top half.

</details>

<details>
<summary>Hint 2</summary>

Every number is $2^k m$ with $m$ odd. How many possible $m$ are there?

</details>

<details>
<summary>Hint 3</summary>

Two numbers with the same odd part: does one divide the other?

</details>

<details>
<summary>Key idea</summary>

Write each number as 2^k·m with m odd: there are 50 odd parts, and numbers sharing an odd part form a divisibility chain (pigeonhole). {51,…,100} shows 50 is not enough.

**Tempting dead end:** Building large sets greedily and trying to prove they're maximal by hand.

**Techniques:** `pigeonhole`, `odd-part-decomposition`

</details>

<details>
<summary>Solution</summary>

**Answer: 51**

Lower bound: $\{51,\dots,100\}$ has 50 elements and no divisibility pairs (twice the smallest is already over 100). So $n \ge 51$.

Upper bound: write each number as $2^k m$ with $m$ odd, $m\in\{1,3,\dots,99\}$: 50 possibilities. Among 51 numbers, two share an odd part by pigeonhole, and then the smaller divides the larger. So $n = 51$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m06` from the repo root.

```js
function run(){
  // Lower bound certificate: {51..100} has no divisibility pair.
  const top = range(51, 100);
  for (const a of top) for (const b of top) if (a < b && b % a === 0) return NaN;
  // Upper bound certificate: partition 1..100 into chains by odd part.
  const chains = new Map();
  for (let x = 1; x <= 100; x++) { let m = x; while (m % 2 === 0) m /= 2; (chains.get(m) || chains.set(m, []).get(m)).push(x); }
  for (const ch of chains.values()) for (let i = 1; i < ch.length; i++) if (ch[i] % ch[i - 1] !== 0) return NaN;
  return top.length === chains.size ? chains.size + 1 : NaN;
}
```

</details>
