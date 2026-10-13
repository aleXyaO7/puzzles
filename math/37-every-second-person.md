# Every Second Person

**Math** · difficulty ●●○○ · `m18`

$100$ people stand in a circle, numbered $1$ to $100$. Starting with person $2$, every second remaining person is eliminated (2, 4, 6, …, wrapping around) until one remains. What is the survivor's number?

<details>
<summary>Hint 1</summary>

Solve it for $n = 1, 2, 4, 8, 16$. Who survives?

</details>

<details>
<summary>Hint 2</summary>

With $2^m$ people, person 1 survives. With $n = 2^m + L$, eliminate $L$ people first.

</details>

<details>
<summary>Hint 3</summary>

After $L$ eliminations, the person next in line is $2L+1$, and $2^m$ people remain.

</details>

<details>
<summary>Key idea</summary>

After one lap of a 2^m circle person 1 survives; in general remove the excess over the largest power of 2 first. In binary, the leading 1 rotates to the end.

**Tempting dead end:** Simulating by hand.

**Techniques:** `reduce-to-power-of-two`, `binary-representation`

</details>

<details>
<summary>Solution</summary>

**Answer: 73**

If $n = 2^m$, each lap halves the circle and person 1 always starts the next lap, so person 1 survives. For $n = 2^m + L$, after $L$ eliminations (persons $2,4,\dots,2L$) we have $2^m$ people starting at $2L+1$, who survives.

$100 = 64 + 36$, so the survivor is $2\cdot36+1 = 73$.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs m18` from the repo root.

```js
function run(){
  const a = range(1, 100); let i = 1;
  while (a.length > 1) { a.splice(i, 1); i = (i + 1) % a.length; if (a.length === 1) break; i = i % a.length; }
  return a[0];
}
```

</details>
