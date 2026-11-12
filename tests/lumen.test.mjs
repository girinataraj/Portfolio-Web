import { test } from "node:test";
import assert from "node:assert/strict";
import { boundedAttention, approachAttention } from "../lib/lumen-model.ts";
test("attention clamps invalid and extreme input without storing a pointer trail", () => {
  assert.deepEqual(boundedAttention(NaN, Infinity), { x: 0, y: 0 });
  assert.deepEqual(boundedAttention(-10, 20), { x: -1, y: 1 });
});
test("attention settles smoothly without overshoot or an endless frame loop", () => {
  let p = { x: 0, y: 0 };
  const target = { x: 1, y: -1 };
  let n = 0;
  while (n++ < 200) {
    const next = approachAttention(p, target);
    assert.ok(next.x >= p.x && next.x <= 1);
    p = next;
    if (p.x === target.x && p.y === target.y) break;
  }
  assert.ok(n < 200);
  assert.deepEqual(p, target);
});
