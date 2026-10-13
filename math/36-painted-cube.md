# Painted Cube

**Math** · difficulty ●○○○ · `m17`

A $10\times10\times10$ cube is painted on the outside and cut into $1000$ unit cubes. How many unit cubes have paint on exactly two faces?

<details>
<summary>Hint 1</summary>

Where on the big cube does a small cube touch exactly two outer faces?

</details>

<details>
<summary>Hint 2</summary>

On an edge but not a corner.

</details>

<details>
<summary>Hint 3</summary>

How many non-corner cubes lie on each edge, and how many edges are there?

</details>

<details>
<summary>Key idea</summary>

Exactly two painted faces means lying on an edge but not at a corner: 12 edges with 8 such cubes each.

**Tempting dead end:** Subtracting the counts for 0, 1 and 3 painted faces from 1000.

**Techniques:** `classify-by-position`

</details>

<details>
<summary>Solution</summary>

**Answer: 96**

A small cube has two painted faces iff it lies on an edge of the big cube but not at a corner. Each of the 12 edges has $10 - 2 = 8$ such cubes: $12\cdot8 = 96$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m17` from the repo root.

```js
function run(){
  let c = 0; const e = v => (v === 0 || v === 9 ? 1 : 0);
  for (let x = 0; x < 10; x++) for (let y = 0; y < 10; y++) for (let z = 0; z < 10; z++) if (e(x) + e(y) + e(z) === 2) c++;
  return c;
}
```

</details>
