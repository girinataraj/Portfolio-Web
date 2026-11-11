# Deployment and domain record

## Existing production — authenticated verification, 11 November 2026

- Project: `portfolio-web`, ID `prj_FkpBukoaC4VRsexSCq9el8hfvcwj`.
- Team: `girinataraj765-gmailcoms-projects`, ID `team_eL4UGhwBotGdMqrUxwHrvGOq`.
- Production URL: https://portfolio-web-ochre-five.vercel.app/.
- Git: https://github.com/girinataraj/Portfolio-Web; branch `main`.
- Prior READY deployment: `dpl_8czwxdqAfzKam9oysozBNUZWBj7g`, commit `277b1473fbe9fa578f68c8202538d89b5ec79f15`, matching original workspace HEAD.
- Existing setting: Next.js and Node 22.x. Build is `npm run build`; Vercel uses the framework's default output-directory setting. Static export produces `out` locally, while Vercel's Next.js adapter reads its manifests from `.next`.
- Other existing aliases include `girinataraj.tech` and `www.girinataraj.tech`. No DNS has been modified.
- Initial team access returned 403. The user authorized the exact team, after which authenticated reads succeeded. No token was exposed or persisted.

## Safe release

Complete lint, typecheck, build, export tests, responsive browser checks, and independent review. Push the implementation branch to the existing repository and inspect its preview in the existing Vercel project. Preserve its Vercel authentication protection. After verification, merge/fast-forward to `main` without force, watch the production build, then verify the existing public URL. Keep the prior READY deployment available for rollback through the same project's deployment history. Record final evidence below.

## Student domains — checked 11 November 2026

- [GitHub's official pack](https://education.github.com/pack?tag=Domains) lists Name.com selected extensions including .dev, and a one-year .me offer from Namecheap.
- [Name.com's official redemption instructions](https://cs.name.com/hc/en-us/articles/360036364834-Signing-up-for-GitHub-Student-Developer-Pack) say to start from GitHub's verified offers while signed out of Name.com, follow the Name.com benefit, log into GitHub, select an eligible domain, and let the automatic promotion apply. Valid registrant details are required.
- [Name.com student entry](https://www.name.com/partner/github-students).

Authenticated Vercel registrar search reports **girins.dev available and non-premium**, with ordinary Vercel registration/renewal pricing of USD 13 for one year at the time checked. This is an availability check, not a free-student-offer quote, reservation, or purchase. Name.com account-specific eligibility and a ₹0 checkout remain unverified. Prior .tech redemption does not itself establish eligibility for a separate provider. No purchase, payment, claim, or DNS change has been made.

Minimum user action if sign-in is required: open https://education.github.com/pack/offers with the verified student account and enter the Name.com benefit. Finish its account/eligibility flow and claim only if the final total is ₹0 without paid add-ons or a payment requirement. Check renewal terms; the first-year offer is not free forever.

After the user confirms successful claim, attach the domain to this existing Vercel project, use its exact DNS instructions, verify HTTPS, then update the canonical origin and rebuild. Do not guess or apply DNS in advance. The Vercel URL works without any domain claim.

## Verification evidence

- Current production export succeeds. Next.js 14's last release still had critical advisories, so the same framework was updated to patched Next.js 16 with React 19.
- Six export tests pass: rendered routes, canonical/crawl metadata, local links/media/authentic PDF, project scope disclosures, social images/titles on every subpage, and the corrected internship.
- Production dependency audit: zero vulnerabilities. Full tooling audit retains nine moderate transitive ESLint/minimatch advisories, with no high or critical findings. These tools do not ship in the static artifact. No forced transitive major override was used.
- Local browser: eight routes at each of 320, 768, and 1440 CSS pixels; one h1 per route, zero horizontal overflow, zero broken loaded images. Mobile menu click, Escape, and keyboard Enter navigation pass.
- Review fixes verified: Escape from a menu link now restores focus to the toggle; project navigation renders the correct case study and route-specific social metadata. Skip link focuses main; no empty links or browser console errors. Reduced-motion CSS disables animations, transitions, and smooth scrolling.
- Internship body in both site and PDF now uses the user's corrected railway waiting hall billing dashboard project. PDF rendering and extracted text verify the correction and unchanged content/layout elsewhere.

First preview `dpl_F1pE2eb79ug1ygXeFUNDCPD5EX27` built successfully but failed adapter packaging because `outputDirectory: out` made the Next.js adapter look for build manifests in the export folder. Removed that override; no production alias was changed during this failure.

## Verified production release

- Application release commit: `0b1c293426f1ad34ab93e6f8513b0378e253e4e8`.
- Verified preview: `dpl_8nPHuBke1eyi9FK6ivcT3vSwypfB`, READY; all eight routes passed browser verification without overflow, missing images, social-image omissions, or console errors.
- Production: `dpl_7PLfEak9k1wmv64Mpgeid3Tdrd7H`, READY on existing project and branch `main`.
- Public origin https://portfolio-web-ochre-five.vercel.app/ serves the redesign with corrected internship content. All eight pages return 200 and their correct canonical URLs. Sitemap, robots, social card, icon, and original project screenshot return 200. Unknown page returns 404.
- Public responses include `X-Content-Type-Options: nosniff` and `X-Frame-Options: DENY`. The publicly downloaded resume matches the corrected local PDF by SHA-256.
- Both `girinataraj.tech` and `www.girinataraj.tech` remain assigned to the production deployment. No DNS was changed.
- The prior production deployment and local checkpoint tag remain available. No force push or project migration was used. The final documentation-only commit records this verified application release; it does not change site behavior.
- Anonymous HTTP checks against the protected preview encountered authentication responses and were not counted as content verification. Preview content was checked in the authenticated browser; the production checks above used public unauthenticated HTTP requests successfully.

Remaining manual work: use the verified student account to redeem the Name.com benefit at a confirmed zero-price checkout, then confirm the successfully claimed domain before any DNS change. V1 omitted SAAI and placement pending factual details; the user has since supplied and approved those details for V2 (see `content-evidence.md`).

## V2 release preparation

V1 READY deployment `dpl_EQziMvoBERfUmtXCVy3UyahjmhBJ`, commit `fd3f3cd71cb4cb73df493075a37c9890bd1bf2c7`, remains the rollback reference. Local tag `checkpoint-portfolio-v1-2026-11-11` preserves that source. The V2 branch is `codex/interactive-portfolio-v2`. Existing project/team/Git/production branch and all domain aliases are retained; no new project, DNS or registration action is needed.

Local verification and measured scores are in `qa-v2.md`; design and motion maintenance are in `design-system-v2.md`. Push the feature branch for a preview, verify the hosted result, then fast-forward `main`. Add actual preview and production evidence after those steps pass.
