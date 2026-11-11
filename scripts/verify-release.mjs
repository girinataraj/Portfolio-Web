import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const origin = new URL(
  process.argv[2] ?? "https://portfolio-web-ochre-five.vercel.app/",
);
const canonicalOrigin = "https://portfolio-web-ochre-five.vercel.app";
const sitemap = await readFile("out/sitemap.xml", "utf8");
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (m) => new URL(m[1]).pathname,
);
const assets = new Set([
  "/sitemap.xml",
  "/robots.txt",
  "/og-image.png",
  "/icon.svg",
]);
const report = {
  origin: origin.origin,
  checkedAt: new Date().toISOString(),
  pages: [],
  assets: [],
  failures: [],
};
async function request(path) {
  return fetch(new URL(path, origin), {
    signal: AbortSignal.timeout(30000),
    redirect: "follow",
  });
}
for (const path of paths) {
  try {
    const response = await request(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
    assert.ok(
      html.includes(`rel="canonical" href="${canonicalOrigin}${path}"`),
      "canonical",
    );
    assert.ok(html.includes("/og-image.png"), "sharing image");
    assert.ok(!html.includes("Google Workspace extension testing"));
    if (path === "/") {
      assert.ok(html.includes("Engineering"));
      assert.ok(html.includes("Railway Waiting Hall Billing System"));
      assert.ok(html.includes("iGEN Services and Solutions"));
    }
    if (path.includes("saai-physiotherapy")) {
      assert.ok(
        html.includes(
          "https://play.google.com/store/apps/details?id=com.saai.physiotherapy",
        ),
      );
      assert.ok(html.includes("Product-level functionality"));
      assert.ok(!html.includes("View on GitHub"));
    }
    if (path.includes("student-placement-system")) {
      assert.ok(html.includes("Live · Private Production"));
      assert.ok(html.includes("Product-level functionality"));
      assert.ok(!html.includes("View on GitHub"));
    }
    if (origin.origin === canonicalOrigin) {
      assert.equal(response.headers.get("x-content-type-options"), "nosniff");
      assert.equal(response.headers.get("x-frame-options"), "DENY");
    }
    for (const match of html.matchAll(/\b(?:src|href)="(\/[^"?#]+)"/g)) {
      if (/\.(?:webp|jpg|png|svg|pdf|css|js|woff2)$/.test(match[1]))
        assets.add(match[1]);
    }
    report.pages.push({ path, status: response.status, canonical: true });
  } catch (error) {
    report.failures.push({ path, error: error.message });
  }
}
for (const path of assets) {
  try {
    const response = await request(path);
    assert.equal(response.status, 200);
    if (path.endsWith("Giri-Resume.pdf")) {
      const hash = (data) => createHash("sha256").update(data).digest("hex");
      assert.equal(
        hash(Buffer.from(await response.arrayBuffer())),
        hash(await readFile("public" + path)),
      );
    }
    report.assets.push({ path, status: response.status });
  } catch (error) {
    report.failures.push({ path, error: error.message });
  }
}
try {
  assert.equal((await request("/release-qa-page-does-not-exist/")).status, 404);
  report.unknownRoute = 404;
} catch (error) {
  report.failures.push({ path: "unknown route", error: error.message });
}
if (process.argv[3])
  await writeFile(process.argv[3], JSON.stringify(report, null, 2));
console.log(
  JSON.stringify({ ...report, assets: report.assets.length }, null, 2),
);
process.exitCode = report.failures.length ? 1 : 0;
