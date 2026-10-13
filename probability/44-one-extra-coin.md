# One Extra Coin

**Probability** · difficulty ●●●○ · `p24`

Alice flips $51$ fair coins and Bob flips $50$. What is the probability that Alice gets strictly more heads than Bob?

<details>
<summary>Hint 1</summary>

Hold back one of Alice's coins.

</details>

<details>
<summary>Hint 2</summary>

Compare 50 coins against 50 coins. Call the three outcomes ahead, tied and behind.

</details>

<details>
<summary>Hint 3</summary>

Alice also has more tails than Bob exactly when... Is there a symmetry between heads and tails?

</details>

<details>
<summary>Key idea</summary>

Set Alice's extra coin aside. After comparing 50 against 50, Alice is ahead or behind with equal probability; on a tie her extra coin decides.

**Tempting dead end:** Summing binomial products over all head counts.

**Techniques:** `symmetry`, `condition-on-the-extra-piece`

</details>

<details>
<summary>Solution</summary>

**Answer: 1/2**

Let Alice have $a$ heads and Bob $b$. Alice has more heads iff $a > b$. She has more tails iff $51-a > 50-b$, i.e. $a \le b$. Exactly one of these happens, and by heads–tails symmetry they are equally likely: $\tfrac12$ each.

(Equivalently: set Alice's last coin aside. If the first 50 against 50 are tied, that coin decides; otherwise it can't change the result. Ahead and behind are equally likely.)

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p24` from the repo root.

```js
function run(){
  const heads = k => { let h = 0; for (let i = 0; i < k; i++) if (Math.random() < 0.5) h++; return h; };
  return mc(200000, () => heads(51) > heads(50) ? 1 : 0);
}
```

</details>
