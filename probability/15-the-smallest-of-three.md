# The Smallest of Three

**Probability** · difficulty ●●○○ · `p15`

Three numbers are drawn independently and uniformly from $[0,1]$. What is the expected value of the smallest one?

<details>
<summary>Hint 1</summary>

The smallest value is the length of a particular gap.

</details>

<details>
<summary>Hint 2</summary>

Three points split $[0,1]$ into four pieces. Is any piece special?

</details>

<details>
<summary>Hint 3</summary>

Think of 4 points on a circle of circumference 1, one of which is the cut.

</details>

<details>
<summary>Key idea</summary>

Three random points cut the interval into four gaps that are exchangeable, so each has expected length 1/4.

**Tempting dead end:** Differentiating P(min > t) = (1−t)^3 and integrating.

**Techniques:** `spacings-symmetry`, `order-statistics`

</details>

<details>
<summary>Solution</summary>

**Answer: 1/4**

Place 4 uniform points on a circle of circumference 1 and cut at one of them. The other three are uniform on $[0,1]$, and the four arcs between consecutive points are exchangeable by symmetry. The arcs sum to 1, so each has mean $\tfrac14$. The first gap is the minimum: $E[\min] = \tfrac14$, and in general $\tfrac1{n+1}$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p15` from the repo root.

```js
function run(){
  return mc(400000, () => Math.min(Math.random(), Math.random(), Math.random()));
}
```

</details>
