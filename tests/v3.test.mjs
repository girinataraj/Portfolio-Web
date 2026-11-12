import { test } from "node:test";
import assert from "node:assert/strict";
import { assertPreview } from "../scripts/preview-guard.mjs";
import { readFileSync } from "node:fs";
const html = (p) => readFileSync(`out/${p}`, "utf8");
test("preview builds fail closed for production, main and ambiguous Vercel contexts", () => {
  for (const env of [
    { VERCEL_ENV: "production" },
    { VERCEL_GIT_COMMIT_REF: "main" },
    { VERCEL: "1" },
    { VERCEL: "1", VERCEL_ENV: "preview", VERCEL_GIT_COMMIT_REF: "other" },
  ])
    assert.throws(() => assertPreview(env));
  assert.doesNotThrow(() => assertPreview({}));
  assert.doesNotThrow(() =>
    assertPreview({
      VERCEL: "1",
      VERCEL_ENV: "preview",
      VERCEL_GIT_COMMIT_REF: "codex/obsidian-v3-1",
    }),
  );
});
test("V3 retains prominent identity and complete accessible signal alternatives without a portrait", () => {
  const home = html("index.html");
  assert.match(home, /GIRI N S/);
  assert.match(home, /Engineering layers/);
  for (const state of [
    "state-interface",
    "state-services",
    "state-intelligence",
  ])
    assert.ok(home.includes(state));
  assert.doesNotMatch(home, /Portrait of Giri|Giri1\.jpg/);
  assert.match(home, /noindex/);
});
