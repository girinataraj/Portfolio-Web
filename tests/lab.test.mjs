import { test } from "node:test";
import assert from "node:assert/strict";
import {
  initialQueue,
  queueTransition,
  retrieveEvidence,
} from "../lib/lab-model.ts";
test("queue permits one called ticket, preserving shared state across invalid repeated actions", () => {
  const initial = initialQueue();
  const called = queueTransition(initial, { type: "call" });
  assert.equal(called.tickets.filter((t) => t.status === "CALLED").length, 1);
  assert.equal(queueTransition(called, { type: "call" }), called);
  assert.equal(initial.tickets[0].status, "WAITING");
  const done = queueTransition(called, { type: "complete" });
  assert.equal(done.tickets[0].status, "COMPLETED");
  assert.equal(
    queueTransition(done, { type: "call" }).tickets[1].status,
    "CALLED",
  );
});
test("only waiting tickets cancel; skip terminates the active ticket; reset is deterministic", () => {
  let s = queueTransition(initialQueue(), { type: "call" });
  assert.equal(queueTransition(s, { type: "cancel", id: 1 }), s);
  s = queueTransition(s, { type: "cancel", id: 2 });
  assert.equal(s.tickets[1].status, "CANCELLED");
  s = queueTransition(s, { type: "skip" });
  assert.equal(s.tickets[0].status, "SKIPPED");
  assert.deepEqual(queueTransition(s, { type: "reset" }), initialQueue());
});
test("keyword retrieval handles no evidence, duplicate tokens and case without inventing an answer", () => {
  assert.deepEqual(retrieveEvidence(""), []);
  assert.deepEqual(retrieveEvidence("volcanoes"), []);
  assert.deepEqual(retrieveEvidence("art"), []);
  assert.deepEqual(retrieveEvidence("CART cart"), retrieveEvidence("cart"));
  assert.equal(retrieveEvidence("cart recovery")[0].id, "commerce");
  assert.ok(retrieveEvidence("queue citations cart").length <= 3);
});
