# OBSIDIAN — final prototype review package

Scope: prototype validation only, on `codex/obsidian-v3-prototype`. The approved name, profession, dark palette, photo-free identity and local About preview are preserved. Full V3 implementation remains unapproved. Production/main/domains/DNS are unchanged; production baseline is `d217bd824b5a56ff4db3f955d36faf3c8d9cf297`.

## What changed

The existing core now supports three distinct conceptual structures. These are original engineering illustrations, not screenshots or claims about a private application's architecture. No live backend, AI request or operational data is involved.

| Mode | Visible structure | Exploration |
| --- | --- | --- |
| Interface | Perspective wireframe plane, layout blocks, input cursor and feedback return | Input → view → feedback |
| Services | Routing hub, three service nodes and a layered data boundary; core recedes | Request → routing → connected services |
| Intelligence | Three source fragments, retrieval lens and response plane | Sources → retrieval → response |

Mode selection changes geometry, connections, core emphasis and particle routes, alongside the caption and selected-button state. The interaction is no longer a text-only switch.

On mobile, the existing Explore Work / About actions now follow the engineering statement, ahead of the field. At 375px, the action row occupies approximately y381–425; at 320px it ends around y406. Name sizing remains approximately 96px / 82px respectively, and 190px at 1440px desktop width.

## Actual transitions and reduced motion

Browser computed styles verify a 420ms crossfade, 620ms spatial settling and 720ms connection-path draw. Keyboard Enter/Space selects the same states as pointer input. The active button uses `aria-pressed`, and response text remains in an atomic polite live region.

With manual or system reduced motion, transitions are 0s, path animation is `none`, and all paths remain fully drawn. Geometry switches immediately; selected state and descriptive feedback remain available. Ambient particles, edge breathing, pointer depth and entrance motion are disabled. A local Lighthouse run also exercised the system reduced-motion preference.

`transitions.json` in the review bundle records all three modes in normal and reduced motion. State comparison images are actual settled browser captures, not a fabricated animation recording. Complete section captures use motion pause to avoid capturing a partial reveal.

## QA results

- 320, 375, 768, 1024 and 1440px: complete name fits, Work action in first viewport, 44px-or-larger layer targets, local About link, no horizontal overflow and no hero photograph.
- Keyboard About → local `#about`, focused About section, Back to hero → `#top`, and Work → focused `#selected-work` pass.
- Layer states, selected-button feedback and normal/reduced-motion computed styles pass. Customer/staff image switching and scope disclosure are checked in the work showcase.
- JavaScript syntax and static prototype build pass. No runtime dependency was added. Existing V2 routes and shared content/layout files were not changed.
- Local mobile Lighthouse with system reduced motion: performance 100, accessibility 100, best practices 100; LCP 1.0s, CLS 0; no console errors. Reports are included in the local review bundle. These are lab category measurements, not a full accessibility certification or field Core Web Vitals.
- About and both selected-work treatments retain the established typography, rules, palette and verified content. QueueLess imagery remains authentic development screenshots with synthetic-data captions; Sacred Commerce artwork remains clearly identified as original illustration for a fictional storefront with simulated checkout.

## Complete capture index

Local directory: `qa/v3/final-review/`. `index.html` provides a browsable review gallery.

- `desktop-hero.jpg`, `desktop-about.jpg`, `desktop-work.jpg`
- `mobile-hero.jpg`, `mobile-about.jpg`, `mobile-work.jpg`
- `mobile-first-screen.jpg`: ordinary 375×900 viewport, showing the Work action early
- `state-interface.jpg`, `state-services.jpg`, `state-intelligence.jpg`, `state-reduced.jpg`
- `state-comparison.jpg`: side-by-side crops of actual state captures
- `layouts.json`, `transitions.json`, Lighthouse HTML/JSON, and this review document

The work captures include both projects and the expanded scope disclosure. Full-page originals are retained alongside the section crops. No screenshot is passed off as a live production application or a recording of motion.

## Remaining limitations

This is a bounded prototype: one hero, one compact About preview and two work treatments. Remaining case studies/pages, a complete navigation system and production integration are deliberately unimplemented. The diagrams explain concepts rather than execute software or guarantee AI correctness. The original project images could receive additional responsive optimization during a later approved build. Manual keyboard/readability checks and automated audits do not replace a full assistive-technology or cross-browser test program. The preview may require existing Vercel account access.

Stop here for review. Approval of this package must not be inferred as authorization to implement or publish the full V3 site.
