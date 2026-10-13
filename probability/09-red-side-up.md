# Red Side Up

**Probability** · difficulty ●○○○ · `p09`

A hat holds three cards: one red on both sides, one white on both sides, and one red on one side and white on the other. You draw a card at random and look at one random side. It is red. What is the probability the other side is also red?

<details>
<summary>Hint 1</summary>

What are the equally likely outcomes of drawing a card and showing a side?

</details>

<details>
<summary>Hint 2</summary>

There are 6 equally likely (card, side) outcomes. How many show red?

</details>

<details>
<summary>Hint 3</summary>

Of the red faces, how many have red on the back?

</details>

<details>
<summary>Key idea</summary>

Condition on faces, not cards: there are three equally likely red faces and two of them belong to the red-red card.

**Tempting dead end:** Saying 1/2 because 'it is either the red-red card or the mixed card'. Those two cards are not equally likely given what you saw.

**Techniques:** `bayes`, `count-equally-likely-outcomes`

</details>

<details>
<summary>Solution</summary>

**Answer: 2/3**

Each of the 6 faces is equally likely to be the one shown. Three are red: two on the red-red card, one on the mixed card. Given red is showing, the other side is red in 2 of these 3 cases: $\tfrac23$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p09` from the repo root.

```js
function run(){
  const cards = [["R","R"],["W","W"],["R","W"]];
  return mc(400000, () => {
    const c = cards[randInt(0, 2)], s = randInt(0, 1);
    if (c[s] !== "R") return null;
    return c[1 - s] === "R" ? 1 : 0;
  });
}
```

</details>
