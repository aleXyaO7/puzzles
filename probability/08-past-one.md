# Past One

**Probability** · difficulty ●●○○ · `p08`

You draw independent uniform random numbers from $[0,1]$ until their running sum exceeds $1$. What is the expected number of draws?

<details>
<summary>Hint 1</summary>

For a positive integer variable, $E[N] = \sum_{n\ge0} P(N>n)$.

</details>

<details>
<summary>Hint 2</summary>

$N > n$ means the first $n$ draws sum to at most 1.

</details>

<details>
<summary>Hint 3</summary>

The region $x_1+\dots+x_n \le 1$, $x_i\ge0$ is a simplex. What is its volume?

</details>

<details>
<summary>Key idea</summary>

Use E[N] = Σ P(N > n); the event N > n is the first n draws summing to at most 1, a simplex of volume 1/n!.

**Tempting dead end:** Computing P(N = n) directly by integrating over where the sum crosses 1.

**Techniques:** `tail-sum-formula`, `simplex-volume`

</details>

<details>
<summary>Solution</summary>

**Answer: e ≈ 2.71828**

$N > n$ iff $U_1+\dots+U_n \le 1$, which is the corner simplex of the unit cube with volume $\tfrac1{n!}$.

$E[N] = \sum_{n\ge0} P(N>n) = \sum_{n\ge0}\tfrac1{n!} = e$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p08` from the repo root.

```js
function run(){
  return mc(400000, () => {
    let s = 0, n = 0;
    while (s <= 1) { s += Math.random(); n++; }
    return n;
  });
}
```

</details>
