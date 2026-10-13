# Three Remainders

**Math** · difficulty ●○○○ · `m16`

What is the smallest positive integer that leaves remainder $2$ when divided by $3$, remainder $3$ when divided by $5$, and remainder $2$ when divided by $7$?

<details>
<summary>Hint 1</summary>

Two of the conditions have the same remainder. Combine them.

</details>

<details>
<summary>Hint 2</summary>

$n \equiv 2 \pmod{21}$.

</details>

<details>
<summary>Hint 3</summary>

Check $2, 23, 44, \dots$ modulo 5.

</details>

<details>
<summary>Key idea</summary>

Two of the conditions say n ≡ 2 mod 3 and mod 7, i.e. n ≡ 2 mod 21. Then scan 2, 23, 44, … against the mod-5 condition.

**Tempting dead end:** Writing out the full CRT inverse formula.

**Techniques:** `chinese-remainder-theorem`, `combine-congruences`

</details>

<details>
<summary>Solution</summary>

**Answer: 23**

$n\equiv2 \pmod 3$ and $n\equiv 2\pmod 7$ combine to $n\equiv2\pmod{21}$. Candidates: $2, 23, 44,\dots$. $2 \bmod 5 = 2$ fails; $23 \bmod 5 = 3$ works. Answer: $23$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m16` from the repo root.

```js
function run(){
  for (let n = 1; ; n++) if (n % 3 === 2 && n % 5 === 3 && n % 7 === 2) return n;
}
```

</details>
