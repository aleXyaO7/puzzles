# Always Ahead in the Count

**Probability** · difficulty ●●●○ · `p07`

In an election, candidate A receives $6$ votes and B receives $4$. The ballots are counted in a uniformly random order. What is the probability that A is strictly ahead throughout the entire count?

<details>
<summary>Hint 1</summary>

The count must start with an A vote. When does a count that starts with A go wrong?

</details>

<details>
<summary>Hint 2</summary>

A bad count has a first moment when the score is tied. Swap A and B votes up to that moment.

</details>

<details>
<summary>Hint 3</summary>

Every count that starts with B is bad. How many bad counts start with A?

</details>

<details>
<summary>Key idea</summary>

Reflect the part of a bad count before the first tie: bad counts starting with A biject with counts starting with B.

**Tempting dead end:** Listing all C(10,4) = 210 orderings, or a dynamic program over the running score.

**Techniques:** `reflection-principle`, `bijection`

</details>

<details>
<summary>Solution</summary>

**Answer: 1/5**

Call a count bad if the score is tied at some point. Every count starting with B is bad (B leads first, A ends ahead, so they tie).

For a bad count starting with A, swap every vote up to the first tie. This gives a bad count starting with B, and the map is reversible. So bad counts are twice the counts starting with B: $P(\text{bad}) = 2\cdot\tfrac{4}{10} = \tfrac{8}{10}$.

Therefore $P(\text{A always ahead}) = \tfrac{2}{10} = \tfrac{6-4}{6+4} = \tfrac15$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p07` from the repo root.

```js
function run(){
  return mc(300000, () => {
    const v = shuffle([1,1,1,1,1,1,-1,-1,-1,-1]);
    let s = 0;
    for (const x of v) { s += x; if (s <= 0) return 0; }
    return 1;
  });
}
```

</details>
