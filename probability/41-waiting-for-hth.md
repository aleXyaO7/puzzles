# Waiting for HTH

**Probability** · difficulty ●●●● · `p21`

A fair coin is flipped until the pattern $\text{HTH}$ appears as three consecutive flips. What is the expected number of flips? (For comparison, $\text{HHT}$ takes $8$ on average.)

<details>
<summary>Hint 1</summary>

Imagine a gambler arrives before every flip, stakes \$1 that the next flip is H, and lets winnings ride on T, then H.

</details>

<details>
<summary>Hint 2</summary>

Each bet is fair, so the casino's expected net gain is zero: expected money paid in equals expected money paid out.

</details>

<details>
<summary>Hint 3</summary>

When HTH first appears, which gamblers are still in the game, and how much does each hold?

</details>

<details>
<summary>Key idea</summary>

Fair-casino argument: a new gambler arrives before each flip and bets on the pattern. The casino's total payout when the pattern appears depends only on the pattern's self-overlaps: 2³ + 2¹ = 10.

**Tempting dead end:** Assuming every length-3 pattern has the same waiting time of 8.

**Techniques:** `fair-casino-martingale`, `pattern-self-overlap`

</details>

<details>
<summary>Solution</summary>

**Answer: 10**

Before each flip a new gambler bets \$1 on H at fair odds, then lets the winnings ride on T, then on H. All bets are fair, so the casino's expected profit at the stopping time $N$ is $0$: $E[N]$ dollars in equals expected payout.

When HTH first appears, only two gamblers are still holding money. The one who started 3 flips ago holds $2^3=8$. The one who started 1 flip ago has won one bet (H) and holds $2$. The one who started 2 flips ago bet on H and saw T, so lost.

So $E[N] = 8 + 2 = 10$. For HHT, no proper suffix matches a prefix, which gives $8$. Overlap is why HTH is slower.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p21` from the repo root.

```js
function run(){
  return mc(300000, () => {
    let a = "", n = 0;
    while (true) { a = (a + (Math.random() < 0.5 ? "H" : "T")).slice(-3); n++; if (a === "HTH") return n; }
  });
}
```

</details>
