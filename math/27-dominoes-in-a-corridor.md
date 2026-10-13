# Dominoes in a Corridor

**Math** · difficulty ●●○○ · `m08`

In how many ways can a $2\times10$ strip be tiled with $1\times2$ dominoes?

<details>
<summary>Hint 1</summary>

How can the rightmost column be covered?

</details>

<details>
<summary>Hint 2</summary>

If one horizontal domino sticks into the last column, what must sit beneath it?

</details>

<details>
<summary>Hint 3</summary>

$T(n) = T(n-1) + T(n-2)$ with $T(1) = 1$, $T(2) = 2$.

</details>

<details>
<summary>Key idea</summary>

Look at the right end: it is either one vertical domino or two stacked horizontals, so T(n) = T(n−1) + T(n−2).

**Tempting dead end:** Counting by the number of horizontal pairs with binomial sums (it works, but it's slower).

**Techniques:** `recursion-on-last-piece`, `fibonacci`

</details>

<details>
<summary>Solution</summary>

**Answer: 89**

The last column is covered by either a vertical domino (leaving a $2\times(n-1)$ strip) or two horizontal dominoes stacked (leaving $2\times(n-2)$). So $T(n) = T(n-1) + T(n-2)$ with $T(1)=1$, $T(2)=2$: $1,2,3,5,8,13,21,34,55,89$. Answer: $89$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m08` from the repo root.

```js
function run(){
  // Backtracking over actual placements, not the recurrence.
  const W = 10, g = [new Array(W).fill(false), new Array(W).fill(false)];
  function go() {
    let r = -1, c = -1;
    outer: for (let j = 0; j < W; j++) for (let i = 0; i < 2; i++) if (!g[i][j]) { r = i; c = j; break outer; }
    if (r < 0) return 1;
    let n = 0;
    if (r === 0 && !g[1][c]) { g[0][c] = g[1][c] = true; n += go(); g[0][c] = g[1][c] = false; }
    if (c + 1 < W && !g[r][c + 1]) { g[r][c] = g[r][c + 1] = true; n += go(); g[r][c] = g[r][c + 1] = false; }
    return n;
  }
  return go();
}
```

</details>
