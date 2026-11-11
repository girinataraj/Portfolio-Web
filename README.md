# Giri N S · Developer portfolio

Next.js 16, React 19, TypeScript, self-hosted Geist fonts, and CSS. All pages are statically rendered. No paid service, tracking, contact API, or runtime secret is needed.

Production: https://portfolio-web-ochre-five.vercel.app/

## Local development and verification

Use Node.js 22 LTS and npm:

```sh
npm ci
npm run dev
```

Production checks and local preview:

```sh
npm run lint
npm run typecheck
npm run build
npm test
npm start
```

Build generates `out/`. `npm start` serves it at http://127.0.0.1:3000; set `PORT` for another port. Tests validate the export, so build first. On a fresh checkout, build before standalone typechecking if generated route types are missing. The build also checks TypeScript. No credentials are required.

## Update content

- Edit `lib/portfolio.ts` for personal details, skills, project descriptions, technology, repository links, boundaries, and merged contributions. Record evidence in `docs/content-evidence.md`.
- Add a project with a unique `slug` to generate its case-study route and sitemap entry automatically. Do not equate repository functionality with production availability or business outcomes.
- Shared sections are in `components/portfolio.tsx`; the client menu is in `components/navigation.tsx`; design tokens and responsive styles are in `app/globals.css`. Route-aware motion is in `components/experience-motion.tsx`, and local project studies are in `components/project-study.tsx` / `lib/story-model.ts`. See `docs/design-system-v2.md` for maintenance.
- Replace `public/resume/Giri-Resume.pdf` only with an authentic updated resume. The existing PDF has no issue date; only its internship body was corrected to the user's supplied railway dashboard project. The rest of its content and layout is preserved.
- Six case studies include two user-approved iGEN production projects. Keep individual contributions separate from product-level features. The existing PDF does not yet include iGEN; this limitation is disclosed on the site.
- Put authentic screenshots in `public/projects/` with captions and alt text. `docs/v2-assets.md` records QueueLess development screenshots, original Sacred Commerce artwork, and optimized derivatives. Company covers are original privacy-safe conceptual illustrations.
- `public/og-image.png` is the 1200 × 630 sharing card; `public/icon.svg` is the favicon.

## Existing Vercel deployment

- Project: `portfolio-web` (`prj_FkpBukoaC4VRsexSCq9el8hfvcwj`).
- Team: `girinataraj765-gmailcoms-projects` (`team_eL4UGhwBotGdMqrUxwHrvGOq`).
- Git repository: `girinataraj/Portfolio-Web`; production branch: `main`.
- Framework: Next.js; Node 22.x; build `npm run build`. Keep Vercel's framework output-directory default; Next.js static export produces `out` locally.
- `vercel.json` versions the production build and response security headers. `next.config.mjs` enables static export and trailing slashes. Do not override Vercel's Next.js output directory with `out`: its adapter still reads build manifests from `.next`.

Push a feature branch to preview in this same project, run checks, then merge/fast-forward the verified change to `main`. Confirm the existing production alias after READY. Vercel retains the previous successful deployment if a replacement build fails. See `docs/deployment.md` for release evidence and rollback reference.

## Domain support

Do not change DNS until the user has claimed the domain. Add the owned domain to this same Vercel project, apply only the exact DNS records Vercel returns, verify HTTPS, then update `site.url` in `lib/portfolio.ts` and the canonical assertion in `tests/export.test.mjs`. Rebuild to update canonical URLs, JSON-LD, robots, sitemap, and social URLs together. Student promotions cover the first year; renewals are not perpetually free.

## Preservation and security

Original clean commit `277b147` is preserved by `checkpoint-portfolio-before-redesign-2026-11-11`. V1 commit `fd3f3cd` is preserved by `checkpoint-portfolio-v1-2026-11-11`; V2 implementation branch is `codex/interactive-portfolio-v2`. No force push is needed. Old generated cache was preserved as ignored `.next-before-redesign/` after inherited Windows permissions blocked builds.

Generic employment, university, certifications, statistics, stock project cards, credential-logging email code, and unused template UI/animation dependencies were removed. Environment files and `.vercel` credentials remain ignored. The ignored `.openai/` registration is an unpublished fallback from before the existing Vercel URL was supplied; it is unused and must not be deployed for this task.

V2 QA, measured Lighthouse scores, independent review fixes and local before/after evidence are documented in `docs/qa-v2.md`. After build, `node scripts/verify-release.mjs https://portfolio-web-ochre-five.vercel.app/ qa/v2/production-http.json` verifies public pages, metadata, assets, security headers, unknown-page status and the resume hash.
