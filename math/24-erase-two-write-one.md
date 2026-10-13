# Erase Two, Write One

**Math** · difficulty ●●○○ · `m05`

The numbers $1, 2, \dots, 10$ are written on a board. Repeatedly, you erase two numbers $a$ and $b$ and write $a + b + ab$. After $9$ steps one number remains. What is it?

<details>
<summary>Hint 1</summary>

Try to factor $a + b + ab$ by adding 1.

</details>

<details>
<summary>Hint 2</summary>

$a+b+ab+1 = (a+1)(b+1)$.

</details>

<details>
<summary>Hint 3</summary>

What quantity over the whole board stays fixed?

</details>

<details>
<summary>Key idea</summary>

a + b + ab = (a+1)(b+1) − 1, so the product of (x+1) over the board never changes.

**Tempting dead end:** Trying different erase orders to see whether the result changes.

**Techniques:** `invariant`, `factor-the-operation`

</details>

<details>
<summary>Solution</summary>

**Answer: 11! − 1 = 39,916,799**

Since $a+b+ab+1 = (a+1)(b+1)$, the product $\prod(x+1)$ over the board is invariant. Initially it is $2\cdot3\cdots11 = 11!$. At the end it is $x+1$, so $x = 11! - 1 = 39{,}916{,}799$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m05` from the repo root.

```js
function run(){
  // Play the process with random choices using exact integers.
  let results = new Set();
  for (let trial = 0; trial < 50; trial++) {
    const b = range(1, 10).map(BigInt);
    while (b.length > 1) {
      const i = randInt(0, b.length - 1), x = b.splice(i, 1)[0];
      const j = randInt(0, b.length - 1), y = b.splice(j, 1)[0];
      b.push(x + y + x * y);
    }
    results.add(b[0].toString());
  }
  return results.size === 1 ? Number([...results][0]) : NaN;
}
```

</details>
