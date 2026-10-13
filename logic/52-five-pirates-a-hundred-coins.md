# Five Pirates, A Hundred Coins

**Logic** · difficulty ●●●● · `l03`

Five pirates of strictly ranked seniority must split $100$ gold coins. The most senior pirate proposes a split, and everyone (including the proposer) votes. If at least half vote yes, the split happens. Otherwise the proposer is thrown overboard and the next most senior proposes. Each pirate wants first to survive, then as much gold as possible, and if otherwise indifferent prefers to see someone thrown overboard. All are perfectly logical. How many coins does the most senior pirate keep?

<details>
<summary>Hint 1</summary>

Solve the game with 1 pirate, then 2, then 3.

</details>

<details>
<summary>Hint 2</summary>

With 2 pirates, the senior one votes yes and that is already half: he keeps all 100. What does that mean for the junior pirate when there are 3?

</details>

<details>
<summary>Hint 3</summary>

A pirate votes yes only if offered strictly more than they'd get in the next round. Who is cheapest to buy?

</details>

<details>
<summary>Key idea</summary>

Work back from two pirates. Each proposer buys exactly the votes that are cheapest: the pirates who would get nothing in the next round, at 1 coin each.

**Tempting dead end:** Guessing the senior pirate must share generously to avoid being thrown overboard.

**Techniques:** `backward-induction`, `buy-the-cheapest-votes`

</details>

<details>
<summary>Solution</summary>

**Answer: 98**

Number the pirates $1$ (most junior) to $5$ (most senior) and solve from the end. A pirate votes yes only if offered strictly more than in the next round.
• Pirates 1–2: pirate 2's own vote is half, so he takes everything: $(0, 100)$.
• Pirates 1–3: pirate 3 needs one more vote. Pirate 1 gets 0 in the next round, so 1 coin buys him: $(1, 0, 99)$.
• Pirates 1–4: pirate 4 needs one more vote. Pirate 2 gets 0 next round: $(0, 1, 0, 99)$.
• Pirates 1–5: pirate 5 needs two more votes. Pirates 1 and 3 get 0 next round: $(1, 0, 1, 0, 98)$.

So the senior pirate keeps $98$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs l03` from the repo root.

```js
function run(){
  // Exhaustive search over every proposal at every stage.
  // pay[i] = coins to pirate i (0 = most junior) in the outcome with k pirates.
  function outcome(k) {
    if (k === 1) return [100];
    const next = outcome(k - 1);
    const need = Math.ceil(k / 2);
    let best = -1, bestAlloc = null, count = 0;
    const a = new Array(k).fill(0);
    (function fill(i, left) {
      if (i === k - 1) {
        a[i] = left;
        let votes = 1;
        for (let j = 0; j < k - 1; j++) if (a[j] > next[j]) votes++;
        if (votes >= need) {
          if (a[i] > best) { best = a[i]; bestAlloc = a.slice(); count = 1; }
          else if (a[i] === best) count++;
        }
        return;
      }
      for (let c = 0; c <= left; c++) { a[i] = c; fill(i + 1, left - c); }
    })(0, 100);
    if (count !== 1) throw new Error("ambiguous at " + k + " pirates");
    return bestAlloc;
  }
  return outcome(5)[4];
}
```

</details>
