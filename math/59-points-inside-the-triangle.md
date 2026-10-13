# Points Inside the Triangle

**Math** · difficulty ●●●○ · `m22`

How many points with integer coordinates lie strictly inside the triangle with vertices $(0,0)$, $(20,0)$ and $(0,30)$?

<details>
<summary>Hint 1</summary>

Is there a formula linking a lattice polygon's area to its lattice points?

</details>

<details>
<summary>Hint 2</summary>

Pick: $A = I + \tfrac B2 - 1$.

</details>

<details>
<summary>Hint 3</summary>

A segment from $(0,0)$ to $(a,b)$ has $\gcd(a,b)+1$ lattice points. Count $B$ carefully.

</details>

<details>
<summary>Key idea</summary>

Pick's theorem: Area = I + B/2 − 1. The area is 300 and the boundary has 20 + 30 + gcd(20,30) = 60 lattice points.

**Tempting dead end:** Summing column by column with floor functions.

**Techniques:** `picks-theorem`, `gcd-boundary-count`

</details>

<details>
<summary>Solution</summary>

**Answer: 271**

The area is $\tfrac12\cdot20\cdot30 = 300$. Boundary points: the two legs contribute $20$ and $30$ (excluding one endpoint each), and the hypotenuse from $(20,0)$ to $(0,30)$ contributes $\gcd(20,30)=10$, so $B = 60$.

Pick: $I = A - \tfrac B2 + 1 = 300 - 30 + 1 = 271$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m22` from the repo root.

```js
function run(){
  // Strictly inside: x > 0, y > 0, 30x + 20y < 600.
  let c = 0;
  for (let x = 0; x <= 20; x++) for (let y = 0; y <= 30; y++) if (x > 0 && y > 0 && 30 * x + 20 * y < 600) c++;
  return c;
}
```

</details>
