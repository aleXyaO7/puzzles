# Three Pieces of Stick

**Probability** · difficulty ●○○○ · `p01`

A stick of length $1$ is broken at two points chosen independently and uniformly at random. What is the probability that the three pieces can form a triangle?

<details>
<summary>Hint 1</summary>

What single condition on the longest piece decides whether a triangle exists?

</details>

<details>
<summary>Hint 2</summary>

A triangle is impossible exactly when some piece is longer than 1/2. Can two pieces both be longer than 1/2?

</details>

<details>
<summary>Hint 3</summary>

The left piece exceeds 1/2 exactly when both break points land in the right half.

</details>

<details>
<summary>Key idea</summary>

A triangle fails exactly when one piece exceeds 1/2, and at most one piece can, so the failure events are disjoint.

**Tempting dead end:** Splitting into cases on which break point is left and integrating each triangle inequality separately.

**Techniques:** `complementary-counting`, `disjoint-events`, `geometric-probability`

</details>

<details>
<summary>Solution</summary>

**Answer: 1/4**

Three lengths summing to $1$ form a triangle iff every piece is shorter than $\tfrac12$. The events "piece $i$ is longer than $\tfrac12$" are disjoint, since two such pieces would already sum past $1$.

The left piece exceeds $\tfrac12$ iff both points lie in $(\tfrac12,1)$: probability $\tfrac14$. Same for the right piece. The middle piece exceeds $\tfrac12$ iff $|X-Y|>\tfrac12$, whose region in the unit square is two triangles of area $\tfrac18$: again $\tfrac14$.

So $P(\text{fail}) = \tfrac34$ and $P(\text{triangle}) = \tfrac14$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p01` from the repo root.

```js
function run(){
  return mc(400000, () => {
    const x = Math.random(), y = Math.random();
    const a = Math.min(x, y), b = Math.max(x, y);
    return Math.max(a, b - a, 1 - b) < 0.5 ? 1 : 0;
  });
}
```

</details>
