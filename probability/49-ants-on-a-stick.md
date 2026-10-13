# Ants on a Stick

**Probability** · difficulty ●●●● · `p29`

$25$ ants are placed independently and uniformly on a stick of length $1$ metre. Each faces left or right at random, and all walk at $1$ metre per minute. When two ants meet, both turn around instantly. An ant leaves when it walks off an end. What is the expected time, in minutes, until the stick is empty?

<details>
<summary>Hint 1</summary>

If you couldn't tell the ants apart, what would a collision look like?

</details>

<details>
<summary>Hint 2</summary>

Pretend ants pass through each other. Then each ant walks straight off an end.

</details>

<details>
<summary>Hint 3</summary>

Each ant's time to its end is uniform on $[0,1]$. What is the expected maximum of 25 such times?

</details>

<details>
<summary>Key idea</summary>

A collision where both ants turn around looks exactly like the ants passing through each other. So the stick empties when the last ghost ant walks off, each ghost needing a uniform(0,1) time.

**Tempting dead end:** Tracking collisions one by one.

**Techniques:** `pass-through-relabeling`, `order-statistics`

</details>

<details>
<summary>Solution</summary>

**Answer: 25/26 ≈ 0.9615**

Ignoring labels, two ants bouncing off each other look the same as two ants passing through. So the set of ant positions evolves as if they pass through. Each "ghost" walks straight off, taking time equal to its distance to the end it faces, which is uniform on $[0,1]$ and independent across ants.

The stick empties at the maximum of 25 independent uniforms: $E = \tfrac{25}{26}$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p29` from the repo root.

```js
function run(){
  // Event-driven simulation with real reversals at every collision.
  return mc(40000, () => {
    let ants = range(1, 25).map(() => ({ x: Math.random(), v: Math.random() < 0.5 ? -1 : 1 })).sort((a, b) => a.x - b.x);
    let t = 0;
    while (ants.length) {
      let dt = Infinity, ev = null;
      if (ants[0].v < 0) { dt = ants[0].x; ev = ["fallL"]; }
      const last = ants[ants.length - 1];
      if (last.v > 0 && 1 - last.x < dt) { dt = 1 - last.x; ev = ["fallR"]; }
      for (let i = 0; i + 1 < ants.length; i++)
        if (ants[i].v > 0 && ants[i + 1].v < 0) { const c = (ants[i + 1].x - ants[i].x) / 2; if (c < dt) { dt = c; ev = ["hit", i]; } }
      t += dt;
      for (const a of ants) a.x += a.v * dt;
      if (ev[0] === "fallL") ants.shift();
      else if (ev[0] === "fallR") ants.pop();
      else { ants[ev[1]].v = -1; ants[ev[1] + 1].v = 1; }
    }
    return t;
  });
}
```

</details>
