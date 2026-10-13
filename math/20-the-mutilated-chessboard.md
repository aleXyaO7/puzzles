# The Mutilated Chessboard

**Math** · difficulty ●○○○ · `m01`

Two diagonally opposite corner squares are removed from an $8\times8$ chessboard. In how many ways can the remaining $62$ squares be tiled by $31$ dominoes?

<details>
<summary>Hint 1</summary>

Colour the board as a chessboard. What does each domino cover?

</details>

<details>
<summary>Hint 2</summary>

What colour are the two removed squares?

</details>

<details>
<summary>Hint 3</summary>

Count black and white squares that remain.

</details>

<details>
<summary>Key idea</summary>

Every domino covers one black and one white square, but both removed corners are the same colour.

**Tempting dead end:** Trying to construct a tiling or count them with a transfer matrix.

**Techniques:** `coloring-invariant`

</details>

<details>
<summary>Solution</summary>

**Answer: 0**

Each domino covers one black and one white square, so any tiling covers equally many of each. Opposite corners share a colour, so the remaining board has 30 squares of one colour and 32 of the other. No tiling exists: the answer is $0$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m01` from the repo root.

```js
function run(){
  // Count tilings by brute-force profile DP (no colouring argument used).
  const R = 8, C = 8;
  const blocked = (r, c) => (r === 0 && c === 0) || (r === 7 && c === 7);
  let dp = new Map([[0, 1]]);
  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
    const next = new Map(), add = (k, v) => next.set(k, (next.get(k) || 0) + v);
    for (const [mask, ways] of dp) {
      const filled = (mask & 1) || blocked(r, c);
      const rest = mask >> 1;
      if (filled) { if ((mask & 1) && blocked(r, c)) continue; add(rest, ways); continue; }
      if (r + 1 < R && !blocked(r + 1, c)) add(rest | (1 << (C - 1)), ways);            // vertical
      if (c + 1 < C && !blocked(r, c + 1) && !(rest & 1)) add(rest | 1, ways);           // horizontal
    }
    dp = next;
  }
  return dp.get(0) || 0;
}
```

</details>
