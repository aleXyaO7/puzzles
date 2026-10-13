# A Positive Test

**Probability** · difficulty ●○○○ · `p17`

A disease affects $1\%$ of people. A test detects it $99\%$ of the time when present, and gives a false positive $5\%$ of the time when absent. You test positive. What is the probability you have the disease?

<details>
<summary>Hint 1</summary>

Picture a concrete crowd of 10,000 people.

</details>

<details>
<summary>Hint 2</summary>

How many are sick and test positive? How many are healthy and test positive?

</details>

<details>
<summary>Hint 3</summary>

Your answer is the share of all positives that are sick.

</details>

<details>
<summary>Key idea</summary>

Imagine 10,000 people: 99 true positives versus 495 false positives.

**Tempting dead end:** Answering 99% by confusing P(positive | sick) with P(sick | positive).

**Techniques:** `bayes`, `natural-frequencies`

</details>

<details>
<summary>Solution</summary>

**Answer: 1/6 ≈ 0.167**

Out of 10,000 people, 100 are sick and 99 of those test positive. Of the 9,900 healthy people, $5\%$, or 495, test positive.

$P(\text{sick}\mid+) = \tfrac{99}{99+495} = \tfrac{99}{594} = \tfrac16$.

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p17` from the repo root.

```js
function run(){
  return mc(3000000, () => {
    const sick = Math.random() < 0.01;
    const pos = sick ? Math.random() < 0.99 : Math.random() < 0.05;
    if (!pos) return null;
    return sick ? 1 : 0;
  });
}
```

</details>
