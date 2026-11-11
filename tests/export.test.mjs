import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve("out");
const read = (path) => readFileSync(resolve(root, path), "utf8");
test("all primary routes have usable, server-rendered content", () => {
  for (const route of [
    "index.html",
    "about/index.html",
    "projects/index.html",
    "contact/index.html",
  ]) {
    const html = read(route);
    assert.match(html, /<h1[ >]/);
    assert.match(html, /id="main-content"/);
    assert.match(html, /Skip to content/);
    assert.doesNotMatch(
      html,
      /XYZ University|Tech Solutions Inc\.|99% client|fallback_key/,
    );
  }
});
test("canonical and crawl metadata use the real deployment domain", () => {
  const html = read("index.html");
  assert.match(
    html,
    /rel="canonical" href="https:\/\/portfolio-web-ochre-five\.vercel\.app\//,
  );
  assert.match(html, /property="og:image"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(read("sitemap.xml"), /projects\/queueless-pulse/);
  assert.match(read("robots.txt"), /Sitemap:/);
});
test("local navigation and media resolve in the static export", () => {
  for (const route of [
    "index.html",
    "projects/index.html",
    "about/index.html",
    "contact/index.html",
    "projects/queueless-pulse/index.html",
    "projects/sacred-commerce/index.html",
  ]) {
    const html = read(route);
    for (const [, raw] of html.matchAll(/(?:href|src)="(\/[^"?#]*)/g)) {
      const path = decodeURIComponent(raw).split("&amp;")[0];
      assert.ok(
        existsSync(resolve(root, "." + path)),
        `${route}: missing ${path}`,
      );
    }
  }
  assert.ok(
    readFileSync(resolve(root, "resume/Giri-Resume.pdf"))
      .subarray(0, 5)
      .toString() === "%PDF-",
  );
});
test("project case studies distinguish demonstrations from production claims", () => {
  assert.match(
    read("projects/sacred-commerce/index.html"),
    /simulated checkout/i,
  );
  assert.match(
    read("projects/queueless-pulse/index.html"),
    /row.lock|row lock/i,
  );
});

test("all routes preserve sharing imagery and use route-specific social titles", () => {
  for (const [route, title] of [
    ["about", "About"],
    ["contact", "Contact"],
    ["projects", "Selected projects"],
    ["projects/queueless-pulse", "QueueLess Pulse"],
    ["projects/sacred-commerce", "Sacred Commerce"],
    ["projects/closefuture-agent", "CloseFuture AI Assistant"],
    ["projects/resume-rag", "Resume RAG"],
    ["projects/saai-physiotherapy", "SAAI Physiotherapy"],
    [
      "projects/student-placement-system",
      "Student Training &amp; Placement Management System",
    ],
  ]) {
    const html = read(`${route}/index.html`);
    assert.match(html, /property="og:image" content="[^"]+og-image.png"/);
    assert.ok(
      html.includes(`name="twitter:title" content="${title} | Giri N S"`),
      route,
    );
  }
});

test("company case studies preserve access boundaries and approved contributions", () => {
  const saai = read("projects/saai-physiotherapy/index.html");
  const placement = read("projects/student-placement-system/index.html");
  assert.ok(
    saai.includes(
      "https://play.google.com/store/apps/details?id=com.saai.physiotherapy",
    ),
  );
  assert.ok(
    saai.includes("View on Google Play") &&
      saai.includes("Product-level functionality"),
  );
  assert.ok(
    placement.includes("Live · Private Production") &&
      placement.includes("placement tracking dashboard"),
  );
  for (const html of [saai, placement]) {
    assert.ok(html.includes("privacy") || html.includes("conceptual"));
    assert.ok(
      !html.includes("Explore the source") && !html.includes("View on GitHub"),
    );
  }
  assert.ok(!placement.includes("ASP.NET"));
});

test("interactive studies provide a complete text alternative and original imagery", () => {
  for (const slug of [
    "queueless-pulse",
    "sacred-commerce",
    "closefuture-agent",
    "resume-rag",
  ]) {
    const html = read(`projects/${slug}/index.html`);
    assert.ok(html.includes("Read the complete flow as text"), slug);
    assert.ok(html.includes("No live data, AI calls, or transactions."), slug);
  }
  assert.ok(read("index.html").includes("Engineering"));
  assert.ok(
    read("projects/queueless-pulse/index.html").includes(
      "/projects/v2/queue-customer-desktop.webp",
    ),
  );
});

test("internship reflects the user's corrected railway dashboard project", () => {
  for (const route of ["index.html", "about/index.html"]) {
    const html = read(route);
    assert.match(
      html,
      /Responsive React Admin Dashboard for Railway Waiting Hall Billing System/,
    );
    assert.doesNotMatch(html, /Google Workspace extension/);
  }
});
