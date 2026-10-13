# Ten Hats in a Line

**Logic** · difficulty ●●●● · `l05`

Ten prisoners stand in a line facing forward. Each wears a black or white hat and can see every hat in front of them, but not their own or any behind. Starting from the back, each prisoner in turn calls out "black" or "white", and everyone hears every call. A prisoner who calls their own hat colour is freed. They may agree on a strategy beforehand. What is the largest number of prisoners they can guarantee to free?

<details>
<summary>Hint 1</summary>

The prisoner at the back can never be guaranteed. Why?

</details>

<details>
<summary>Hint 2</summary>

Can a single bit from the back prisoner help everyone else?

</details>

<details>
<summary>Hint 3</summary>

Let the back prisoner announce the parity of black hats they see. What can the next prisoner work out?

</details>

<details>
<summary>Key idea</summary>

The last prisoner spends their call on the parity of black hats they can see. Every later prisoner then knows the parity of the black hats from their own position forward, and can deduce their own colour.

**Tempting dead end:** Pairing prisoners up (one signals to the next), which guarantees only 5.

**Techniques:** `parity-encoding`, `information-sharing`

</details>

<details>
<summary>Solution</summary>

**Answer: 9**

The back prisoner sees nothing of their own hat and no one has spoken, so no strategy can guarantee them. So at most 9.

For 9: the back prisoner calls "black" if they see an odd number of black hats, "white" otherwise. Prisoner 2 sees the hats in front, compares that parity with the announced one, and deduces their own colour. Each later prisoner knows the announced parity, has heard the colours of everyone between (all calls after the first are correct), and sees the rest, so they also deduce their own. 9 are guaranteed.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs l05` from the repo root.

```js
function run(){
  // (1) Parity strategy frees at least 9 of 10 in all 1024 hat assignments.
  const n = 10;
  for (let m = 0; m < 1 << n; m++) {
    const hat = i => (m >> i) & 1;          // index 0 = back of the line
    const calls = [];
    let par = 0; for (let i = 1; i < n; i++) par ^= hat(i);
    calls.push(par);
    for (let i = 1; i < n; i++) {
      let p = calls[0];
      for (let j = 1; j < i; j++) p ^= calls[j];
      for (let j = i + 1; j < n; j++) p ^= hat(j);
      calls.push(p);
    }
    let saved = 0; for (let i = 0; i < n; i++) if (calls[i] === hat(i)) saved++;
    if (saved < 9) return NaN;
  }
  // (2) Upper bound: whatever the strategy, the back prisoner's call depends only on the hats in front,
  //     so flipping their own hat makes them wrong in one of the two cases. Checked exhaustively for n = 3:
  let best = 0;
  for (let a = 0; a < 16; a++) for (let b = 0; b < 16; b++) for (let c = 0; c < 16; c++) {
    let worst = 3;
    for (let m = 0; m < 8; m++) {
      const h0 = m & 1, h1 = m >> 1 & 1, h2 = m >> 2 & 1;
      const c0 = a >> (h1 * 2 + h2) & 1, c1 = b >> (c0 * 2 + h2) & 1, c2 = c >> (c0 * 2 + c1) & 1;
      worst = Math.min(worst, (c0 === h0) + (c1 === h1) + (c2 === h2));
    }
    best = Math.max(best, worst);
  }
  return best === 2 ? n - 1 : NaN;
}
```

</details>
