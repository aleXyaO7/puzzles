# Nim with Three Piles

**Logic** · difficulty ●●●○ · `l07`

Two players take turns removing any positive number of stones from a single pile. The player who takes the last stone wins. The piles start at $3$, $5$ and $7$ stones. How many different first moves guarantee a win for the first player?

<details>
<summary>Hint 1</summary>

Find a quantity that is 0 at the end and that every move from 0 makes nonzero.

</details>

<details>
<summary>Hint 2</summary>

Write the pile sizes in binary and XOR them.

</details>

<details>
<summary>Hint 3</summary>

A move on pile $p$ wins iff it changes $p$ to $p \oplus s$, where $s$ is the current nim-sum. For which piles is that smaller than $p$?

</details>

<details>
<summary>Key idea</summary>

A position is losing for the player to move exactly when the XOR (nim-sum) of the pile sizes is 0. 3 ⊕ 5 ⊕ 7 = 1, and a winning move is any move that makes the XOR 0.

**Tempting dead end:** Trying to search the game tree by hand.

**Techniques:** `nim-sum`, `p-positions`

</details>

<details>
<summary>Solution</summary>

**Answer: 3**

By Bouton's theorem, the player to move loses iff the nim-sum (XOR) of the piles is $0$. Here $3\oplus5\oplus7 = 1$.

A winning move turns some pile $p$ into $p\oplus1$, which is possible iff $p\oplus1<p$, i.e. $p$ is odd. All three piles are odd: $3\to2$, $5\to4$, $7\to6$. That's $3$ winning moves.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs l07` from the repo root.

```js
function run(){
  // Brute-force game search with memoisation; no nim-sum used.
  const memo = new Map();
  const win = s => {
    const k = s.slice().sort((a, b) => a - b).join(",");
    if (memo.has(k)) return memo.get(k);
    let w = false;
    for (let i = 0; i < 3 && !w; i++) for (let t = 1; t <= s[i]; t++) {
      const n = s.slice(); n[i] -= t;
      if (!win(n)) { w = true; break; }
    }
    memo.set(k, w); return w;
  };
  const start = [3, 5, 7]; let count = 0;
  for (let i = 0; i < 3; i++) for (let t = 1; t <= start[i]; t++) { const n = start.slice(); n[i] -= t; if (!win(n)) count++; }
  return count;
}
```

</details>
