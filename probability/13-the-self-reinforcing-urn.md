# The Self-Reinforcing Urn

**Probability** · difficulty ●●●○ · `p13`

An urn starts with one red and one blue ball. Ten times, you draw a ball at random, then return it along with one extra ball of the same color. What is the probability that exactly $5$ of the $10$ draws were red?

<details>
<summary>Hint 1</summary>

Compute the probability of a specific sequence, say RRB. Then try RBR.

</details>

<details>
<summary>Hint 2</summary>

The numerators multiply $1\cdot2\cdots$ for reds and $1\cdot2\cdots$ for blues, in whatever order they come.

</details>

<details>
<summary>Hint 3</summary>

So every sequence with $k$ reds has probability $\tfrac{k!(10-k)!}{11!}$. Multiply by the number of such sequences.

</details>

<details>
<summary>Key idea</summary>

Any specific sequence with k reds has the same probability k!(10−k)!/11!, so the number of reds is uniform on 0..10.

**Tempting dead end:** Tracking the urn draw by draw with a large probability tree.

**Techniques:** `exchangeability`, `hidden-uniformity`

</details>

<details>
<summary>Solution</summary>

**Answer: 1/11**

For any sequence with $k$ reds and $10-k$ blues, the denominators are $2,3,\dots,11$ and the numerators are $1,2,\dots,k$ for reds and $1,2,\dots,10-k$ for blues. So the probability is $\tfrac{k!(10-k)!}{11!}$ regardless of order.

$P(k \text{ reds}) = \binom{10}{k}\tfrac{k!(10-k)!}{11!} = \tfrac{10!}{11!} = \tfrac1{11}$ for every $k$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs p13` from the repo root.

```js
function run(){
  // Exact dynamic program over the urn's contents.
  let dist = new Map([["1,1", 1]]);
  for (let step = 0; step < 10; step++) {
    const next = new Map();
    for (const [key, p] of dist) {
      const [r, b] = key.split(",").map(Number);
      const add = (k, q) => next.set(k, (next.get(k) || 0) + q);
      add((r + 1) + "," + b, p * r / (r + b));
      add(r + "," + (b + 1), p * b / (r + b));
    }
    dist = next;
  }
  return dist.get("6,6") || 0; // 5 reds drawn -> 6 red, 6 blue
}
```

</details>
