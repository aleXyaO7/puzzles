# Same Cycle

**Probability** · difficulty ●●●● · `p26`

A permutation of $\{1,\dots,100\}$ is chosen uniformly at random. What is the probability that $1$ and $2$ lie in the same cycle?

<details>
<summary>Hint 1</summary>

What is the distribution of the length of the cycle containing 1?

</details>

<details>
<summary>Hint 2</summary>

Building the cycle from 1, each new element closes the cycle with probability 1/(remaining). Show that the length is uniform on $1,\dots,100$.

</details>

<details>
<summary>Hint 3</summary>

Given a cycle of length $L$, what is the chance 2 is in it?

</details>

<details>
<summary>Key idea</summary>

Trace the cycle through 1 in uniformly random order: the position at which it closes is uniform, and 2 is equally likely to be anywhere among the 99 other elements.

**Tempting dead end:** Summing over the length of 1's cycle with binomial counts.

**Techniques:** `sequential-construction`, `uniform-position`

</details>

<details>
<summary>Solution</summary>

**Answer: 1/2**

The cycle containing $1$ has length uniform on $\{1,\dots,100\}$: the probability it has length $L$ is $\tfrac{99}{100}\cdot\tfrac{98}{99}\cdots\tfrac{1}{101-L} = \tfrac1{100}$.

Given length $L$, the other $L-1$ members are a uniform subset of the 99 other elements, so $2$ is among them with probability $\tfrac{L-1}{99}$.

$P = \tfrac1{100}\sum_{L=1}^{100}\tfrac{L-1}{99} = \tfrac1{100}\cdot\tfrac{99\cdot100/2}{99} = \tfrac12$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p26` from the repo root.

```js
function run(){
  const n = 100;
  return mc(200000, () => {
    const p = shuffle(range(0, n - 1));
    let j = p[0];
    while (j !== 0) { if (j === 1) return 1; j = p[j]; }
    return 0;
  });
}
```

</details>
