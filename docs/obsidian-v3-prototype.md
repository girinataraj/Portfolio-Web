# OBSIDIAN — V3 visual prototype

Scope: a desktop/mobile interactive hero, one QueueLess spotlight and one Sacred Commerce tile. This is a visual approval artifact, not the full portfolio rebuild. It lives only on `codex/obsidian-v3-prototype`. Do not merge it to main or change production, domains, DNS, or rollback history without a later explicit instruction.

## Direction

Obsidian black, graphite facets, cold white typography and restrained ice-cyan signals. The headline “Beyond the interface.” connects visual experience to the underlying engineering. The focal object is an original SVG engineering-field illustration, not a photograph, application screenshot, private architecture or usage metric. Three selectable layers express verified areas of work: interface, services and applied AI.

QueueLess uses authentic repository screenshots, labeled development/synthetic data, inside a cinematic perspective treatment. Staff/customer buttons switch original images. The native disclosure gives verified scope and role boundaries. Sacred Commerce uses its original mountain illustration and explicitly states fictional storefront/simulated checkout. No personal facts or company-project claims were added.

## Implementation

Files: `public/obsidian/index.html`, `obsidian.css`, `obsidian.js`, and self-hosted Geist fonts. No Next.js page, shared layout, production stylesheet, dependency, existing route or content module is changed. Next.js copies these public files into the static export; preview entry is `/obsidian/index.html`.

Local use: run the existing `npm run build`, then `npm start`; open `http://127.0.0.1:3000/obsidian/index.html` (or the selected PORT). Existing assets resolve from `/projects/v2/`. No credentials or API services are needed.

Motion: brief visible-first headline/core entrances; fine-pointer depth; two signal particles and a slow edge light; layer selection; screenshot crossfade; project perspective/hover; one-shot section entries. CSS/WAAPI only. Ambient motion pauses when offscreen or the document is hidden. System reduced motion and a manual pause disable nonessential movement. Touch retains native buttons without pointer depth.

## Review and approval

Review the composition, typography, technical centerpiece and project treatment on desktop and mobile. Approval of this prototype is required before any full V3 implementation. Next phase, only after approval: adapt the remaining verified projects, case studies, about/experience/contact, navigation and metadata to the selected visual system; then perform full accessibility/performance/release QA. Production remains the existing V2 release throughout this prototype phase.

## Prototype verification

- Five checked widths: 320, 375, 768, 1024 and 1440px. No horizontal overflow, one h1, every layer control within the hero, and no overlap between layer notes and the hero footer. The tablet control position and desktop hero overlap were corrected during review.
- Keyboard layer selection and customer/staff screenshot switching work. The native scope disclosure opens. Manual motion pause removes particle animation and preserves visible content; ambient motion pauses below the hero. Pointer movement updates the fine-pointer depth transform; coarse-pointer CSS removes it.
- JavaScript syntax check, production export build and all 14 existing portfolio tests pass. Only this document and `public/obsidian/` are added. No existing page/layout/content/dependency is modified.
- Lighthouse 13.6.0, Chrome 157, local production export, default mobile simulation: performance 100, accessibility 100, best practices 100; LCP 1.0s, CLS 0. Final run with system reduced motion enabled reports the same category scores and resolves visible-label/accessibility-name mismatches. Reports are local ignored files under `qa/v3/lighthouse-{prototype,reduced-final}.report.{html,json}`. These are prototype lab results, not a full-site accessibility certification. The deliberate noindex prototype is not assessed for SEO release readiness.
- Local screenshots: `qa/v3/desktop-hero.png`, `desktop-work.png`, `desktop-full.png`, `mobile-hero.png`, `mobile-work.png`, `mobile-full.png`. The authentic project images were decoded before full-page captures.

Review lenses: creative direction uses an original faceted signal-field composition and varied spotlight/tile treatments; frontend review checked native controls, reduced motion, small-screen bounds and absence of new runtime dependencies; recruiter review enlarged mobile identity and retained immediately visible role, verified work and direct source/contact actions. This was a bounded prototype review, not a full V3 release audit.

The hosted preview URL and observed verification are supplied with the prototype handoff. Do not describe this as a released V3 portfolio. Production main remains at `d217bd824b5a56ff4db3f955d36faf3c8d9cf297`.
