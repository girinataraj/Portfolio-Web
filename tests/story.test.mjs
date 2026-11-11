import { test } from "node:test";
import assert from "node:assert/strict";
import { storySteps, clampStep } from "../lib/story-model.ts";
test("step selection is bounded even with invalid or empty input", () => {
  assert.equal(clampStep(-1, 4), 0);
  assert.equal(clampStep(8, 4), 3);
  assert.equal(clampStep(1.9, 4), 1);
  assert.equal(clampStep(NaN, 4), 0);
  assert.equal(clampStep(2, 0), 0);
});
test("queue study represents verified waiting, called and terminal transitions", () => {
  const steps = storySteps("queueless-pulse");
  assert.deepEqual(
    steps.map((s) => s.state),
    ["WAITING", "CALLED", "COMPLETED"],
  );
  assert.ok(steps.every((s) => s.title && s.detail && s.nodes.length === 3));
});
test("commerce study explicitly limits checkout to simulation", () => {
  assert.match(storySteps("sacred-commerce").at(-1).detail, /simulated/i);
});
test("AI studies differentiate tool routing from resume retrieval", () => {
  assert.match(storySteps("closefuture-agent").at(-1).detail, /MCP/);
  assert.match(storySteps("resume-rag")[1].detail, /three/);
  assert.ok(storySteps("resume-rag").some((s) => /unavailable/.test(s.detail)));
});
