import { test } from "node:test";
import assert from "node:assert/strict";
import { segmentFallback } from "../lib/static-export.mjs";
test("Windows exported segments resolve for ordinary and dynamic routes", () => {
  assert.equal(
    segmentFallback("/contact/__next.contact.__PAGE__.txt"),
    "/contact/__next.contact/__PAGE__.txt",
  );
  assert.equal(
    segmentFallback(
      "/projects/saai-physiotherapy/__next.projects.$d$slug.__PAGE__.txt",
    ),
    "/projects/saai-physiotherapy/__next.projects/$d$slug/__PAGE__.txt",
  );
  assert.equal(segmentFallback("/__next._tree.txt"), null);
});
test("segment fallback never rewrites ordinary assets or unsafe segment tokens", () => {
  for (const p of [
    "/assets/Giri1.jpg",
    "/contact/index.html",
    "/contact/__next.contact...txt",
    "/contact/__next.contact.C:.__PAGE__.txt",
  ])
    assert.equal(segmentFallback(p), null);
});
