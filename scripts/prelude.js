function randInt(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
function range(a, b) { const out = []; for (let i = a; i <= b; i++) out.push(i); return out; }
function shuffle(arr) { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }
function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a; }
function mc(trials, fn) { let n = 0, s = 0, s2 = 0; for (let i = 0; i < trials; i++) { const v = fn(); if (v === null || v === undefined) continue; n++; s += v; s2 += v * v; } const mean = s / n; const vr = Math.max(0, s2 / n - mean * mean); return { mean, se: Math.sqrt(vr / Math.max(1, n - 1)), n }; }
