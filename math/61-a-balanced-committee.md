# A Balanced Committee

**Math** · difficulty ●●●○ · `m24`

A club has $10$ men and $10$ women. In how many ways can it choose a committee (of any size, possibly empty) with equally many men and women?

<details>
<summary>Hint 1</summary>

The answer is $\sum_k \binom{10}{k}^2$. Is there a single binomial coefficient equal to it?

</details>

<details>
<summary>Hint 2</summary>

Choosing $k$ women is the same as choosing which $10-k$ women are left out.

</details>

<details>
<summary>Hint 3</summary>

Mark the men on the committee and the women off it. How many people are marked?

</details>

<details>
<summary>Key idea</summary>

Swap one side: pick the men who are IN and the women who are OUT. Equal counts means exactly 10 people are picked from 20, so the answer is C(20,10).

**Tempting dead end:** Computing Σ C(10,k)² term by term.

**Techniques:** `bijection`, `complement-trick`

</details>

<details>
<summary>Solution</summary>

**Answer: 184,756**

For a committee with $k$ men and $k$ women, mark the $k$ men on it and the $10-k$ women not on it. That marks exactly $10$ of the $20$ people, and every set of 10 marked people arises from exactly one balanced committee. So the count is $\binom{20}{10} = 184{,}756$ (Vandermonde's identity).

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m24` from the repo root.

```js
function run(){
  // Count balanced subsets of 20 people directly.
  const pop = m => { let c = 0; while (m) { m &= m - 1; c++; } return c; };
  let c = 0;
  for (let men = 0; men < 1024; men++) for (let women = 0; women < 1024; women++) if (pop(men) === pop(women)) c++;
  return c;
}
```

</details>
