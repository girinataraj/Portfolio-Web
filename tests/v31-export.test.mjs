import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
test("expanded routes are server-rendered, discoverable and explicitly preview-only", () => {
  for (const route of ["experience", "technologies", "open-source", "lab"]) {
    const html = readFileSync(`out/${route}/index.html`, "utf8");
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.ok(html.includes("noindex"));
    assert.ok(html.includes(`href="/${route}/"`));
  }
});
test("lab exports honest boundaries and Lumen remains subordinate to the real identity", () => {
  const lab = readFileSync("out/lab/index.html", "utf8");
  assert.match(lab, /keyword overlap/);
  assert.match(lab, /not reproduced here/);
  const home = readFileSync("out/index.html", "utf8");
  assert.match(home, /<h1[^>]*>[\s\S]*?GIRI N S/);
  assert.match(home, /LUMEN/);
  assert.match(home, /Wake Lumen/);
  assert.doesNotMatch(home, /Portrait of Giri/);
});
test("non-scripted visitors receive a clear lab boundary and complete process transcript", () => {
  const lab = readFileSync("out/lab/index.html", "utf8");
  const fallback = [...lab.matchAll(/<noscript>([\s\S]*?)<\/noscript>/g)]
    .map((x) => x[1])
    .join(" ");
  assert.match(fallback, /requires JavaScript/);
  const home = readFileSync("out/index.html", "utf8");
  assert.match(home, /<summary>Read all four engineering ideas<\/summary>/);
});
