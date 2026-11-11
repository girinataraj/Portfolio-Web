# OBSIDIAN — V3 visual prototype

Scope: a desktop/mobile interactive hero, a compact local About preview, one QueueLess spotlight and one Sacred Commerce tile. This is a visual approval artifact, not the full portfolio rebuild. It lives only on `codex/obsidian-v3-prototype`. Do not merge it to main or change production, domains, DNS, or rollback history without a later explicit instruction.

Approval status: the user approved the hero's name prominence and typography hierarchy. This does **not** approve the complete V3 direction or authorize full-site implementation. The current changes are limited to the specifically requested prototype corrections.

## Direction

Obsidian black, graphite facets, cold white typography and restrained ice-cyan signals. **GIRI N S** is the oversized primary heading. **Software Developer** and **Full-stack & Applied AI** follow directly beneath it; “Beyond the interface. Connected underneath.” is a smaller engineering statement. The original SVG signal field complements the identity on the right on desktop and follows it on mobile. It is a conceptual illustration, not a photograph, application screenshot, private architecture or usage metric. Three selectable layers express verified areas of work: interface, services and applied AI.

QueueLess uses authentic repository screenshots, labeled development/synthetic data, inside a cinematic perspective treatment. Staff/customer buttons switch original images. The native disclosure gives verified scope and role boundaries. Sacred Commerce uses its original mountain illustration and explicitly states fictional storefront/simulated checkout. No personal facts or company-project claims were added.

## Implementation

Files: `public/obsidian/index.html`, `obsidian.css`, `obsidian.js`, self-hosted Geist fonts, and two small Node helpers under `prototypes/`. No shared layout, production stylesheet, dependency, existing route or content module is changed. This branch's `vercel.json` builds only the static prototype into ignored `prototype-dist/out`; it does not update the project's stored settings. The entry is the preview root `/`. There is no runtime backend, iframe or React page wrapper.

Local use: run `node prototypes/build-obsidian.mjs`, then `node prototypes/preview-obsidian.mjs`; open `http://127.0.0.1:3000/` (or the selected PORT). The static bundle includes only the required original project images and fonts. No dependency installation, credentials or API services are needed. The existing V2 `npm run build` remains available and unchanged.

The prototype build refuses production and `main`, and refuses Vercel builds unless the environment identifies this exact preview branch. These guards were exercised locally. Do not merge this branch's preview configuration into main for the full V3 build; implementation after approval must retain or restore the application's Next.js production configuration.

Motion: brief visible-first headline/core entrances; fine-pointer depth; two signal particles and a slow edge light; layer selection; screenshot crossfade; project perspective/hover; one-shot section entries. CSS/WAAPI only. Ambient motion pauses when offscreen or the document is hidden. System reduced motion and a manual pause disable nonessential movement. Touch retains native buttons without pointer depth.

## Review and approval

Review the composition, typography, technical centerpiece and project treatment on desktop and mobile. Approval of this prototype is required before any full V3 implementation. Next phase, only after approval: adapt the remaining verified projects, case studies, about/experience/contact, navigation and metadata to the selected visual system; then perform full accessibility/performance/release QA. Production remains the existing V2 release throughout this prototype phase.

## Prototype verification

- Five checked widths: 320, 375, 768, 1024 and 1440px. No horizontal overflow, one h1, every layer control within the hero, and no overlap between layer notes and the hero footer. The tablet control position and desktop hero overlap were corrected during review.
- Keyboard layer selection and customer/staff screenshot switching work. The native scope disclosure opens. Manual motion pause removes particle animation and preserves visible content; ambient motion pauses below the hero. Pointer movement updates the fine-pointer depth transform; coarse-pointer CSS removes it.
- JavaScript syntax check, existing Next.js export build and all 14 existing portfolio tests pass. The standalone static bundle and production/main build guards pass. No existing page/layout/content/dependency is modified; only branch-local preview build configuration and ignored output are added alongside the prototype.
- Lighthouse 13.6.0, Chrome 157, local production export, default mobile simulation: performance 100, accessibility 100, best practices 100; LCP 1.0s, CLS 0. Final run with system reduced motion enabled reports the same category scores and resolves visible-label/accessibility-name mismatches. Reports are local ignored files under `qa/v3/lighthouse-{prototype,reduced-final}.report.{html,json}`. These are prototype lab results, not a full-site accessibility certification. The deliberate noindex prototype is not assessed for SEO release readiness.
- Local screenshots: `qa/v3/desktop-hero.png`, `desktop-work.png`, `desktop-full.png`, `mobile-hero.png`, `mobile-work.png`, `mobile-full.png`. The authentic project images were decoded before full-page captures.

Review lenses: creative direction uses an original faceted signal-field composition and varied spotlight/tile treatments; frontend review checked native controls, reduced motion, small-screen bounds and absence of new runtime dependencies; recruiter review checks the full name as the dominant heading, the immediately visible profession, verified work and direct actions. This was a bounded prototype review, not a full V3 release audit.

## Name-first hero correction — 12 November 2026

The name is now the sole h1, approximately 190px at 1440px desktop width and 96px at 375px mobile width. The profession is 31px / 22px respectively. The small identity metadata and dominant slogan were removed. On mobile the visual order is name → profession → short engineering statement → interactive signal field → Explore Work / About me. The subsequent targeted review replaces the external About action with the compact local `#about` preview; no About route or full page is implemented.

Five fresh checks at 320, 375, 768, 1024 and 1440px confirm that the complete name and profession are within the initial viewport, the name fits horizontally, the core graphic does not overlap it, and the page has no horizontal overflow. The hero contains no photograph. Existing signal-layer selection, keyboard Work navigation and motion pause pass. This validates the visible hierarchy; no timed visitor-recognition study is claimed.

The revised local mobile Lighthouse run scores performance/accessibility/best practices 100/100/100, LCP 0.8s and CLS 0. Report: `qa/v3/lighthouse-name-first.report.{html,json}`. New handoff screenshots are `qa/v3/name-first-desktop.png` and `qa/v3/name-first-mobile.png`; measurements are in `qa/v3/name-first-layout-checks.json`. Earlier prototype screenshots and reports remain available separately.

This correction changes only the prototype hero markup/styles and these notes. Production/main/DNS and the preview-only build guards remain untouched. Stop for approval of the revised prototype.

## Targeted About, readability and control refinements — 12 November 2026

- About me now navigates to `#about` in the same prototype. The matching OBSIDIAN section contains only the verified development focus, B.Tech IT education at Nandha Engineering College (Erode, 2023–2027 / expected graduation 2027), and Software Developer Intern role at iGEN Services and Solutions (May–August 2026). Evidence remains in `content-evidence.md`. No new company features, metrics, private links, source code or records are included.
- The anchor moves keyboard focus to the local section; Back to hero returns to `#top`. No new page or V2 route was created or changed.
- A visible invitation, “Choose a layer to explore,” introduces three bordered 46px-high controls. Labels are 13px; response descriptions are 14px. Selected border/fill, `aria-pressed`, `aria-controls` and an atomic live region expose the state clearly. Enter and Space activation pass. Tiny duplicate diagram labels were removed rather than enlarged into clutter.
- Meaningful captions were raised to 11–13px and descriptive text to 14–18px throughout this bounded prototype. The approved oversized name, profession, photo-free hero and dark signal-field treatment remain intact.
- Fresh checks at 320, 375, 768, 1024 and 1440px pass: no horizontal overflow, complete name/role in the initial viewport, readable controls within bounds, no panel/footer overlap, and a local About target. Fractional control bounds are compared with a half-pixel rounding tolerance.
- Manual motion pause removes core/particle animation and sets scrolling to auto. About navigation and focus also pass with motion paused. A local Lighthouse run with system reduced motion enabled measures performance/accessibility/best practices 100/100/100, LCP 1.0s, CLS 0. These remain lab diagnostics, not a full accessibility certification. Report: `qa/v3/lighthouse-about-controls-reduced.report.{html,json}`. JavaScript syntax and the static prototype build pass; no dependency was added.
- New handoff captures: `qa/v3/refined-desktop.png`, `refined-mobile.png`, `about-desktop.png`, `about-mobile.png`. Layout evidence: `qa/v3/about-controls-layout-checks.json`.

The full V3 rebuild remains unapproved. Present this prototype iteration, then stop for review.

The Next.js adapter returned 404 for the standalone HTML, including a compiled static HTML route. The preview therefore uses Vercel's supported per-deployment [static framework/build/output overrides](https://vercel.com/docs/project-configuration/vercel-json), scoped to this branch. Existing production settings and deployment remain intact. The hosted preview URL and observed verification are supplied with the prototype handoff. Do not describe this as a released V3 portfolio. Production main remains at `d217bd824b5a56ff4db3f955d36faf3c8d9cf297`.
