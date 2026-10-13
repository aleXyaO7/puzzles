# The Lost Boarding Pass

**Probability** · difficulty ●●○○ · `p04`

$100$ passengers board a plane with $100$ assigned seats, in order. The first passenger lost their pass and sits in a uniformly random seat. Every later passenger sits in their own seat if it is free, and otherwise in a uniformly random free seat. What is the probability that the last passenger gets their own seat?

<details>
<summary>Hint 1</summary>

Which seats can the last passenger possibly end up in?

</details>

<details>
<summary>Hint 2</summary>

The last passenger gets either seat 1 or seat 100. Nothing else is left.

</details>

<details>
<summary>Hint 3</summary>

Whenever a displaced passenger chooses, are seat 1 and seat 100 treated any differently?

</details>

<details>
<summary>Key idea</summary>

Seat 1 and seat 100 are treated identically by every random choice, and the game is decided the moment one of them is taken.

**Tempting dead end:** Setting up a recursion over the number of passengers and solving it.

**Techniques:** `symmetry`

</details>

<details>
<summary>Solution</summary>

**Answer: 1/2**

When the last passenger boards, the remaining seat is either seat 1 (the first passenger's) or seat 100: any other seat $k$ would have been taken by passenger $k$.

Every random choice made along the way (by the first passenger or a displaced one) picks uniformly among free seats, so it is equally likely to hit seat 1 or seat 100. The first of these two seats to be taken decides the outcome, and by symmetry each is equally likely to be first. Answer: $\tfrac12$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p04` from the repo root.

```js
function run(){
  const n = 100;
  return mc(60000, () => {
    const taken = new Array(n).fill(false);
    const freeRandom = () => { const f = []; for (let i = 0; i < n; i++) if (!taken[i]) f.push(i); return f[randInt(0, f.length - 1)]; };
    taken[freeRandom()] = true;
    for (let p = 1; p < n - 1; p++) taken[taken[p] ? freeRandom() : p] = true;
    return taken[n - 1] ? 0 : 1;
  });
}
```

</details>
