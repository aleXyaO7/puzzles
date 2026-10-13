# Twenty-One Stones

**Math** · difficulty ●○○○ · `m14`

There is a pile of $21$ stones. Two players alternate turns; on each turn a player removes $1$, $2$ or $3$ stones. Whoever takes the last stone wins. You move first. How many stones should you take to guarantee a win?

<details>
<summary>Hint 1</summary>

Start from small piles. Who wins with 1, 2, 3 stones? With 4?

</details>

<details>
<summary>Hint 2</summary>

From 4, every move leaves 1, 2 or 3 for the opponent.

</details>

<details>
<summary>Hint 3</summary>

What multiple of 4 can you leave from 21?

</details>

<details>
<summary>Key idea</summary>

Positions that are multiples of 4 are losing for the player to move. Always hand your opponent a multiple of 4.

**Tempting dead end:** Exploring the game tree from 21 forward.

**Techniques:** `p-positions`, `working-backwards`

</details>

<details>
<summary>Solution</summary>

**Answer: 1**

A pile of $4k$ is lost for the player to move: whatever they take ($t$), the opponent takes $4-t$ and returns to a multiple of 4, eventually reaching 0. From 21, take $1$ to leave 20.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m14` from the repo root.

```js
function run(){
  const win = [false];
  for (let n = 1; n <= 21; n++) win[n] = [1, 2, 3].some(t => t <= n && !win[n - t]);
  const good = [1, 2, 3].filter(t => !win[21 - t]);
  return good.length === 1 ? good[0] : NaN;
}
```

</details>
