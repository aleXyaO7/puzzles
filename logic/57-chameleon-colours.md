# Chameleon Colours

**Logic** · difficulty ●●●○ · `l08`

An island has $10$ red, $14$ green and $16$ blue chameleons. Whenever two chameleons of different colours meet, both change to the third colour. For how many of the three colours is it possible that, after some sequence of meetings, all $40$ chameleons have that colour?

<details>
<summary>Hint 1</summary>

What happens to (red − green) when a red meets a blue?

</details>

<details>
<summary>Hint 2</summary>

Every difference of two counts changes by 0 or $\pm3$.

</details>

<details>
<summary>Hint 3</summary>

To end all one colour, the other two counts must both be 0. Check each difference mod 3, then check that the reachable colour is actually reachable.

</details>

<details>
<summary>Key idea</summary>

Each meeting changes every pairwise difference of counts by 0 or ±3, so the differences mod 3 never change. All-blue needs red = green = 0, so red − green ≡ 0 (mod 3), and so on.

**Tempting dead end:** Trying meeting sequences by hand.

**Techniques:** `invariant-mod-n`

</details>

<details>
<summary>Solution</summary>

**Answer: 1**

A meeting changes two counts by $-1$ and the third by $+2$, so each pairwise difference changes by $0$ or $\pm3$. Differences mod 3 are invariant.

All blue needs $R-G\equiv0$, but $10-14=-4\equiv2$: impossible. All red needs $G-B\equiv0$, but $-2$: impossible. All green needs $R-B\equiv0$: $10-16=-6\equiv0$. ✓ And it is reachable: 10 red–blue meetings give $(0,34,6)$; a green–blue meeting gives $(2,33,5)$; 2 red–blue give $(0,37,3)$; green–blue gives $(2,36,2)$; 2 red–blue give $(0,40,0)$. So exactly $1$ colour.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs l08` from the repo root.

```js
function run(){
  // Breadth-first search over every reachable (red, green, blue) state.
  const seen = new Set(), queue = [[10, 14, 16]];
  seen.add("10,14,16");
  while (queue.length) {
    const s = queue.shift();
    for (let i = 0; i < 3; i++) for (let j = i + 1; j < 3; j++) {
      if (!s[i] || !s[j]) continue;
      const t = s.slice(); t[i]--; t[j]--; t[3 - i - j] += 2;
      const k = t.join(",");
      if (!seen.has(k)) { seen.add(k); queue.push(t); }
    }
  }
  return ["40,0,0", "0,40,0", "0,0,40"].filter(k => seen.has(k)).length;
}
```

</details>
