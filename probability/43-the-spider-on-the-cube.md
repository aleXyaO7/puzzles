# The Spider on the Cube

**Probability** · difficulty ●●●○ · `p23`

A spider sits at one corner of a wire-frame cube. Each step, it walks along one of the $3$ edges at its current corner, chosen uniformly at random. What is the expected number of steps until it first reaches the opposite corner?

<details>
<summary>Hint 1</summary>

Only the distance to the target matters, by symmetry.

</details>

<details>
<summary>Hint 2</summary>

From distance 3, every step goes to distance 2. From distance 2, what are the chances of going to 1 or back to 3?

</details>

<details>
<summary>Hint 3</summary>

Let $E_d$ be the expected remaining steps at distance $d$. Write three equations.

</details>

<details>
<summary>Key idea</summary>

Lump the 8 corners by distance from the target (3, 2, 1, 0). The walk on distances is a 4-state chain with simple transition probabilities.

**Tempting dead end:** Writing 7 equations, one per corner.

**Techniques:** `state-lumping`, `first-step-analysis`

</details>

<details>
<summary>Solution</summary>

**Answer: 10**

By symmetry, track the distance $d\in\{0,1,2,3\}$ to the target.

$E_3 = 1 + E_2$; $E_2 = 1 + \tfrac23E_1 + \tfrac13E_3$; $E_1 = 1 + \tfrac13\cdot0 + \tfrac23E_2$.

Substituting $E_3$: $E_2 = \tfrac43 + \tfrac23E_1 + \tfrac13E_2$, so $E_2 = 2 + E_1$. Then $E_1 = 1 + \tfrac23(2+E_1)$, so $E_1 = 7$, $E_2 = 9$, $E_3 = 10$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p23` from the repo root.

```js
function run(){
  // Corners are 3-bit vectors; a step flips one random bit.
  return mc(300000, () => {
    let v = 0, n = 0;
    while (v !== 7) { v ^= 1 << randInt(0, 2); n++; }
    return n;
  });
}
```

</details>
