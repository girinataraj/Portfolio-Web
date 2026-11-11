# Interactive Portfolio V2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. User explicitly authorizes autonomous creative decisions and implementation; no creative approval gate is needed.

**Goal:** Deliver a distinctive editorial engineering portfolio with purposeful interactions, authentic project visuals, measured QA, and a verified release in the existing Vercel project.

**Architecture:** Retain server-rendered Next.js static pages and shared verified content. Add a small route-aware enhancement controller and isolated client-side project interaction studies. CSS handles layout, native scroll progress, transitions, and reduced-motion fallbacks.

**Tech Stack:** Existing Next.js 16 / React 19 / TypeScript / self-hosted Geist; CSS, IntersectionObserver and Web Animations API. No new runtime dependency.

**Spec:** User's attached MISSION, 11 November 2026; research/art-direction below; existing docs/content-evidence.md.

## Global constraints

- Keep static export, existing Vercel project portfolio-web, public URL and .tech aliases; no DNS changes, paid tools, tracking, runtime AI or extra endpoints.
- Keep verified identity, corrected railway internship, original face/photo, resume, project URLs, SEO, and factual boundaries.
- Ask factual questions and withhold affected claims until answered. SAAI and placement descriptions, contributions and technologies are user-confirmed and approved before release.
- Meaningful HTML visible before hydration; no scroll trapping, perpetual decorative loops, blank transitions or navigation delays. Reduced motion removes all nonessential animation.
- Check 320, 375, 768, 1024 and 1440 widths; preserve focus and keyboard operations.

## Visual audit and direction

Current release fd3f3cd: readable type, genuine portrait, complete SSR and accurate content are strong. Dark split hero, repeated architecture blocks, same-width cards, uniform section padding and text-only case studies lack variation and memorable project storytelling. Baseline captures: qa/v2/before-{desktop,mobile,full}.png.

Considered: (1) dark cinematic lab, which retains too much of V1; (2) dashboard portfolio, which compresses storytelling; (3) editorial engineering journal, selected for expressive typography, asymmetric spreads, real imagery, and legible technical depth.

System: warm paper #f0eee8, ink #20211f, orange #bc381d, cobalt profile #2346bc; project-specific sage/sand/lilac canvases. Geist with selective Georgia italic. Thin rules, generous type, numbered captions and varied full-bleed sections, rather than repeated containers.

Motion: 180ms controls, 420ms state transitions, 720ms entrance; cubic-bezier(.22,1,.36,1). Intro text can move through masks but stays meaningful without JS. Route entrances run without intercepting navigation. IntersectionObserver triggers one-shot section movements; pointer portrait depth only on fine pointers; sticky desktop storytelling has ordinary document flow on mobile. Interaction studies animate only on explicit step changes.

## Research

- https://jitter.video/templates/ — study text/image reveals and deliberate timing; no exports or proprietary assets copied.
- https://www.hostinger.com/in/templates/website/portfolio — varied portfolio composition and navigation.
- https://www.figma.com/community/portfolio-templates — search crawler blocked; continue with accessible references.
- Framer marketplace Meeko, Dashfolio Neo, Luzia and Zolt: reviewed listings; rendered Meeko/Luzia previews. Take scale/rhythm and project sequencing, not templates/code/art. Some references initially hide the hero while animation loads; this implementation must not.
- https://brittanychiang.com/ — recruiter-oriented evidence and clear professional hierarchy.
- https://rauno.me/ — attention to small interaction details.
- https://motion.dev/docs/react and /react-scroll-animations; https://gsap.com/docs/v3/Plugins/ScrollTrigger/ — both capable, but native CSS/WAAPI meets this scope with less runtime cost. No dual engines or unnecessary pinning.

## Tasks

- [x] 1. Audit, checkpoint `checkpoint-portfolio-v1-2026-11-11`, branch `codex/interactive-portfolio-v2`, baseline screenshots, reference research, factual clarification request and authentic assets.
- [x] 2. Write source-level story-state tests and export behavior checks, observe failure, implement bounded queue/commerce/retrieval studies and accessible controls. Interface: `storySteps(kind)`, `clampStep(index,length)` and named `ProjectStudy` component. Test clamping, source-specific steps, no fake AI output or transactions.
- [x] 3. Recompose shared sections, hero/project visual covers, project index and detail pages. Central enhancement controller owns route entrances/reveals/pointer effect cleanup. Keep all text SSR-visible and all links usable with JS absent.
- [x] 4. Verify lint/types/build/export tests; browser matrix and keyboard/reduced-motion checks; run actual Lighthouse audits with saved reports. Fix material issues and document measured limits.
- [ ] 5. Three independent critic reviews: creative direction, frontend quality, recruiter/content accuracy. Fix substantive findings. Push safe branch, verify existing-project preview, fast-forward main, verify public production, preserve rollback.
- [ ] 6. Record design/motion maintenance guidance, asset provenance, before/after shots, scores, release IDs, commit and remaining factual limitations.

## Review focus

1. With JavaScript disabled or animation unsupported, all content and navigation remain visible.
2. Escape from inside mobile menu returns focus; navigation and resizing cannot strand hidden focus.
3. Interaction labels clearly distinguish studies from actual application screenshots or transactions.
4. Reduced motion and coarse pointers prevent decorative motion/depth without losing controls.
5. Light/dark editorial panels retain readable contrast, touch controls and small-screen layout.

## Execution ledger

Pre-flight: shared Project.slug/metadata origin and existing SEO routes are preserved. Asset research owns only public/projects/v2 and docs/v2-assets.md; source implementation stays with the owner. Release uses the existing authenticated Vercel team/project. Questions about SAAI/placement do not block independent work.
