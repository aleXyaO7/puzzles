# Four Points, One Half

**Probability** · difficulty ●●○○ · `p10`

Four points are chosen independently and uniformly on a circle. What is the probability that all four lie within some semicircle?

<details>
<summary>Hint 1</summary>

If the points fit in a semicircle, there is a natural 'first' point going clockwise.

</details>

<details>
<summary>Hint 2</summary>

Let $E_i$ be the event that the other three points lie within the half circle clockwise from point $i$. Can two $E_i$ happen at once?

</details>

<details>
<summary>Hint 3</summary>

Given point $i$, what is $P(E_i)$?

</details>

<details>
<summary>Key idea</summary>

Name the point the semicircle starts from: 'all others lie clockwise within π of point i' are disjoint events, each with probability (1/2)^3.

**Tempting dead end:** Fixing one point and integrating over the arcs to the others in many cases.

**Techniques:** `disjoint-events`, `symmetry`

</details>

<details>
<summary>Solution</summary>

**Answer: 1/2**

If all points lie in a semicircle, exactly one point is the clockwise-first one; call this event $E_i$ for point $i$. The $E_i$ are disjoint (with probability 1).

$P(E_i) = (\tfrac12)^3$, since each other point independently falls in the half circle clockwise from point $i$. So the probability is $4\cdot\tfrac18 = \tfrac12$. In general it is $n/2^{n-1}$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p10` from the repo root.

```js
function run(){
  const TAU = 2 * Math.PI;
  return mc(300000, () => {
    const t = [0,0,0,0].map(() => Math.random() * TAU);
    for (const a of t) {
      if (t.every(b => ((b - a + TAU) % TAU) <= Math.PI)) return 1;
    }
    return 0;
  });
}
```

</details>
