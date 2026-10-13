# The Blue-Eyed Islanders

**Logic** · difficulty ●●●● · `l04`

An island has $8$ perfectly logical inhabitants: $5$ have blue eyes and $3$ have brown eyes. Nobody knows their own eye colour, there are no mirrors and nobody discusses eye colour, but everyone sees everyone else. Any islander who works out that they have blue eyes must leave at midnight that night, and everyone sees who has left. One day a visitor announces to all: "At least one of you has blue eyes." On which night do the blue-eyed islanders leave?

<details>
<summary>Hint 1</summary>

Solve the case with 1 blue-eyed islander, then 2.

</details>

<details>
<summary>Hint 2</summary>

With 2 blue-eyed islanders, each sees exactly one. What does each expect to happen on night 1 if their own eyes are brown?

</details>

<details>
<summary>Hint 3</summary>

With $n$ blue-eyed islanders, nothing happens on nights $1,\dots,n-1$. What does each learn when night $n-1$ passes quietly?

</details>

<details>
<summary>Key idea</summary>

Induction on the number of blue-eyed people. With n blue-eyed, each sees n−1 and reasons: if I'm not blue, they leave on night n−1. When they don't, everyone learns something they couldn't know before.

**Tempting dead end:** Arguing the announcement adds nothing because everyone already sees blue eyes.

**Techniques:** `common-knowledge`, `induction`

</details>

<details>
<summary>Solution</summary>

**Answer: Night 5**

Claim: with $n$ blue-eyed islanders, they all leave on night $n$. For $n=1$, the lone blue-eyed islander sees no blue eyes, so the announcement tells them it's them: they leave night 1.

Suppose it holds for $n-1$. A blue-eyed islander sees $n-1$ blue-eyed people. If their own eyes were brown, those $n-1$ would leave on night $n-1$. When nobody leaves that night, they conclude their own eyes are blue and leave on night $n$, as do the others.

With 5 blue-eyed islanders: night 5. The announcement matters because it makes "at least one has blue eyes" common knowledge, which starts the induction.

</details>

<details>
<summary>Independent check (exhaustive computation)</summary>

Run `node scripts/verify.mjs l04` from the repo root.

```js
function run(){
  // Possible-worlds model of everyone's knowledge.
  // A world is an 8-bit mask of who is blue; the actual world has 5 blue.
  const N = 8, actual = 0b00011111;
  let worlds = [];
  for (let w = 1; w < (1 << N); w++) worlds.push(w);         // announcement removes w = 0
  const leavers = (w, ws) => {
    let out = 0;
    for (let i = 0; i < N; i++) {
      if (!(w >> i & 1)) continue;
      const alt = w ^ (1 << i);                               // same world, my eye flipped
      if (!ws.includes(alt)) out |= 1 << i;                   // I can rule out not being blue
    }
    return out;
  };
  for (let night = 1; night <= 20; night++) {
    const seen = leavers(actual, worlds);
    if (seen) return night;
    worlds = worlds.filter(w => leavers(w, worlds) === seen); // public observation
  }
  return NaN;
}
```

</details>
