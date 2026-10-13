# Waiting at the Bus Stop

**Probability** · difficulty ●●○○ · `p19`

Buses arrive at a stop as a Poisson process with an average gap of $10$ minutes. You arrive at a random time. What is the expected length, in minutes, of the gap between the bus before you and the bus after you?

<details>
<summary>Hint 1</summary>

Is the gap you land in a typical gap?

</details>

<details>
<summary>Hint 2</summary>

How long do you expect to wait for the next bus? Does the past matter?

</details>

<details>
<summary>Hint 3</summary>

Run time backwards: how long ago was the previous bus?

</details>

<details>
<summary>Key idea</summary>

You are more likely to land in a long gap. With memorylessness, the time back to the last bus and forward to the next are each 10 on average.

**Tempting dead end:** Answering 10 because the average gap is 10.

**Techniques:** `inspection-paradox`, `memorylessness`

</details>

<details>
<summary>Solution</summary>

**Answer: 20**

By memorylessness, the wait until the next bus is exponential with mean 10. Reversing time, a Poisson process looks the same, so the time since the previous bus is also exponential with mean 10.

The gap you sit in has expected length $10 + 10 = 20$. Long gaps cover more of the timeline, so a random time is more likely to land in one (size-biased sampling).

</details>

<details>
<summary>Independent check (simulation)</summary>

Run `node scripts/verify.mjs p19` from the repo root.

```js
function run(){
  const T = 2e6, times = [0];
  while (times[times.length - 1] < T) times.push(times[times.length - 1] - 10 * Math.log(1 - Math.random()));
  return mc(20000, () => {
    const t = 1000 + Math.random() * (T - 2000);
    let lo = 0, hi = times.length - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (times[m] <= t) lo = m; else hi = m; }
    return times[hi] - times[lo];
  });
}
```

</details>
