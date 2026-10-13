# Dropping the Needle

**Probability** · difficulty ●●●● · `p22`

A floor has parallel lines spaced $1$ unit apart. A needle of length $1$ is dropped at a random position and angle. What is the probability that it crosses a line? Try to answer without integrating over the angle.

<details>
<summary>Hint 1</summary>

For a needle of length 1, crossing at most once, $P(\text{cross}) = E[\#\text{crossings}]$.

</details>

<details>
<summary>Hint 2</summary>

Split a long needle into pieces: expected crossings add up. So $E[\#\text{crossings}] = c\cdot\text{length}$ for straight needles, and in fact for any bent wire.

</details>

<details>
<summary>Hint 3</summary>

Find a shape whose number of crossings you know for sure, wherever it lands.

</details>

<details>
<summary>Key idea</summary>

The expected number of crossings is linear in length for any rigid curve (Buffon's noodle). A circle of diameter 1 always crosses exactly twice and has length π, so a length-1 needle crosses 2/π times on average.

**Tempting dead end:** Computing the double integral over center position and angle (correct, but it misses the elegant argument).

**Techniques:** `linearity-of-expectation`, `buffons-noodle`

</details>

<details>
<summary>Solution</summary>

**Answer: 2/π ≈ 0.6366**

Since a length-1 needle crosses at most once, $P(\text{cross}) = E[X]$ where $X$ counts crossings.

By linearity, cutting any rigid wire into small pieces shows $E[X] = c\cdot L$ for a wire of length $L$, whatever its shape. A circle of diameter $1$ (length $\pi$) always crosses the lines exactly twice, so $c\pi = 2$ and $c = \tfrac2\pi$.

So $P(\text{cross}) = \tfrac2\pi \approx 0.6366$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p22` from the repo root.

```js
function run(){
  // Random direction by rejection sampling in the unit disk (no use of pi).
  return mc(800000, () => {
    let dx, dy, r2;
    do { dx = 2 * Math.random() - 1; dy = 2 * Math.random() - 1; r2 = dx * dx + dy * dy; } while (r2 > 1 || r2 === 0);
    const half = 0.5 * Math.abs(dy) / Math.sqrt(r2);   // half the needle's vertical extent
    const y = Math.random();                             // centre height between lines y=0 and y=1
    return (y - half <= 0 || y + half >= 1) ? 1 : 0;
  });
}
```

</details>
