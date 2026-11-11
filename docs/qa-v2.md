# V2 release QA — 11 November 2026

## Local verification

The user journey is portfolio entry → project evidence → case-study interaction → source/Google Play/contact/resume action. This is a static site: no contact backend, live clinical/student data, runtime AI, purchases or third-party credentials are involved.

- Lint, TypeScript, optimized Next.js static build and 14 tests pass. Tests cover rendered content, crawl/social metadata, local links/media/PDF, scope disclosures, approved company contributions, the corrected AST internship, bounded study steps and Windows static-segment mapping.
- Browser matrix: 10 pages × widths 320, 375, 768, 1024 and 1440 = 50 checks, one h1 per page and no horizontal overflow. Every route loaded with its expected title.
- Keyboard next/previous controls pass for all four studies. Endpoints disable invalid movement. All four text transcripts open. QueueLess gallery switches to the original staff image.
- Mobile navigation, Escape focus return, skip-to-content, breakpoint focus restoration and manual reduced-motion computed styles pass. System reduced motion is also exercised by the QueueLess Lighthouse run.
- Authentic cover images were scrolled into view and checked for successful decoding before the final full-page capture. Initial full-page captures did not load lazy images; those drafts are not the final evidence.

## Measured Lighthouse results

Lighthouse 13.6.0 CLI, Chrome 157, Node 22 on Windows, production static export at localhost. Default simulated mobile throttling; desktop uses the desktop preset. Static preview now supports gzip for text, matching compressed hosting delivery. Scores are lab measurements, not field Core Web Vitals or a guarantee on every device.

| Run | Performance | Accessibility | Best practices | SEO | LCP | TBT | CLS |
| --- | ---: | ---: | ---: | ---: | --- | --- | ---: |
| Home mobile | 94 | 100 | 100 | 100 | 3.0s | 20ms | 0 |
| Home desktop | 100 | 100 | 100 | 100 | 0.6s | 0ms | 0 |
| QueueLess mobile, reduced motion | 95 | 100 | 100 | 100 | 2.9s | 20ms | 0 |

Saved HTML/JSON: `qa/v2/lighthouse-{mobile,desktop,queue}-release.report.{html,json}` (local ignored QA artifacts).

Final public production URL was audited after deployment: **mobile 97 / 100 / 100 / 100** (LCP 2.5s, TBT 70ms, CLS 0), **desktop 100 / 100 / 100 / 100** (LCP 0.5s, TBT 0ms, CLS 0), in performance/accessibility/best-practices/SEO order. Reports: `qa/v2/lighthouse-production-{mobile,desktop}.report.{html,json}`. These are measured Lighthouse category results, not a claim of perfect accessibility or a manual assistive-technology certification.

Material audit fixes: darker small-text accent and contact text for contrast; correct Windows local-prefetch segment fallback; eager/high-priority case cover imagery; responsive portrait/screenshots instead of transferring desktop assets to small viewports; compressed local static delivery. Earlier uncompressed local mobile measurements of 77/79 were investigated rather than reported as the final release.

## Independent review resolutions

Three separate reviewers covered creative direction, frontend behavior, and recruiter/content accuracy. Resolved: repeated work-card rhythm; small identity/role; slow access to GitHub evidence; unclear company-project individual ownership; resume freshness; mobile navigation without JS; focus when crossing breakpoints; contact focus contrast; and pointer effects on coarse pointers. The content reviewer found the contribution/product-scope and privacy boundaries accurate. No unresolved release-blocking finding remained after focused verification.

## Security and factual limitations

`npm audit --omit=dev`: zero advisories. Full audit: nine moderate, zero high/critical, in transitive ESLint / TypeScript-ESLint / minimatch development tooling. These dependencies are absent from the static runtime. No unsafe forced major override was applied. Node's direct TypeScript test import emits a harmless module-format warning; all tests pass.

Root advisory: [minimatch globparts amplification denial of service, GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249), propagated through nine tooling packages. npm suggests a semver-major ESLint change; prefer a compatible upstream tooling update and rerun lint rather than a forced unverified override.

Both company projects are user-confirmed real production applications. Their stacks were directly reconfirmed after the user was told the old PDF omitted them. The complete approved descriptions and privacy boundaries are recorded in `docs/content-evidence.md`. There are no private source links, private application URLs, real records, internal APIs or company screenshots. No claims of individual ownership of every product module are made.

## Visual evidence

Local files under `qa/v2/`: `before-desktop.png`, `before-mobile.png`, `before-full.png`, `after-desktop.png`, `after-mobile.png`, `after-full.png`, and `browser-matrix.json`. Before is the prior verified V1 release. Public production evidence and final deployment IDs are recorded in `docs/deployment.md` after release verification.

Hosted preview: 20 route/viewport checks pass at 375/1440, including client navigation, source-based study state and zero console errors. Preview authentication remains intact; anonymous HTTP receives a Vercel login page and is not counted as application verification. Public production: 10 mobile route checks pass, verified SAAI case-study navigation and Play Store action, 10 anonymous HTTP page checks, 23 asset checks, canonical/social metadata, security headers, unknown-route 404 and resume SHA-256 equality. External public links return 200 except LinkedIn, whose 999 anti-automation response is recorded as restricted/unverified rather than broken.

A final source review clarified QueueLess role wording: staff call/complete/skip; customer ticket cancellation. The copy-only follow-up rebuilt successfully, passed all 14 tests, and was verified in its own protected preview before production. An attempted Vercel connector fetch was rejected by automatic approval review because it creates an authenticated share link. No share link or protection change was made; the existing authenticated browser verified the preview instead.

Future improvements: replace the authentic PDF with a user-approved resume including iGEN, rerun measurements after future image/content changes, and redeem/verify an eligible free custom domain before attaching it or changing DNS. More detailed company architecture or screenshots require explicit factual confirmation and permission.
