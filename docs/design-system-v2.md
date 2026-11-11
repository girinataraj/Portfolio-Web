# Interactive portfolio V2

## Direction

An editorial engineering journal: warm paper, oversized ink typography, signal orange, a cobalt profile spread and an orange contact close. The aim is a memorable personal voice with readable technical evidence. The original portrait remains authentic. Company products lead as paired case studies; QueueLess gets a wider screenshot spread; Sacred Commerce uses original project artwork; AI studies form a compact archive.

References and the three considered directions are recorded in `superpowers/plans/2026-11-11-interactive-portfolio-v2.md`. No template code, third-party artwork or proprietary motion was copied.

## Tokens and layout

- Paper `#f0eee8`, ink `#20211f`, accessible accent `#bc381d`, cobalt `#2346bc`, contact orange `#e95835` with dark `#171a15` text.
- Self-hosted Geist Sans for hierarchy and text, Geist Mono for captions, Georgia italic for selective editorial emphasis.
- Thin rules and generous breathing room connect paired columns, wide spreads, dark work panels and full-width color sections.
- Layouts adapt at 760px and smaller refinements at 375px. No fixed-width desktop canvas is scaled down on mobile.

## Motion and interaction inventory

| Element | Behavior | Accessibility / maintenance |
| --- | --- | --- |
| Hero typography and signature | Short CSS entrance; text remains visible before hydration | No loading gate, no navigation delay |
| Scroll progress | Native CSS scroll timeline where supported | Decorative and absent when unsupported |
| Section reveals | IntersectionObserver triggers one WAAPI transform/opacity entrance | Initial HTML is visible; observer unobserves after entry |
| Portrait | Small rAF-batched pointer depth effect on fine pointers | Cached bounds; reset on exit and coarse pointers |
| Project covers and links | Restrained image transforms, arrows and underline changes | Focus-visible equivalents; contextual focus colors |
| Case-study index | Sticky desktop index; ordinary mobile flow | Anchor links, no scroll trapping or pinned sequence |
| Four project studies | Three explicit steps with bounded previous/next controls and SVG flow | `aria-pressed`, live stage, full native-details transcript; no network calls |
| QueueLess gallery | Customer/staff screenshot selection | Original development images with synthetic-data caption |
| Motion control | Manual pause of decorative animation | Also respects system reduced motion; controls still work |
| Mobile navigation | Disclosure with Escape and focus restoration | Breakpoint changes restore focus to the visible brand |

Control timing is generally 180ms, state transitions 420ms, section entrances 720ms; shared easing `cubic-bezier(.22,1,.36,1)`. `ExperienceMotion` owns effects and cancels animations, observers, media listeners, pointer listeners and rAF work on route changes. Do not add another animation engine for these behaviors.

The root noscript style exposes ordinary mobile navigation and hides nonfunctional enhancement controls. All case content, links and complete study transcripts are server rendered. No runtime without JavaScript was separately measured in this release; export inspection confirms the fallback markup and styles.

## Editing map

- `lib/portfolio.ts`: factual content and optional public/source links. `docs/content-evidence.md` records approval and evidence.
- `components/portfolio.tsx`: shared sections and original covers.
- `components/experience-motion.tsx`: route-aware enhancement lifecycle and motion toggle.
- `components/project-study.tsx`, `lib/story-model.ts`: local interaction studies and complete textual alternatives.
- `app/projects/[slug]/page.tsx`: six static case studies. Keep individual contributions separate from overall company product functionality.
- `app/globals.css`: tokens, layout, responsive rules, focus and reduced-motion fallbacks.
- `docs/v2-assets.md`: authentic image provenance and scope. Responsive derivatives only resize/re-encode the same content.

Never add private production links, repositories, patient/student data, invented usage metrics or undisclosed mock screenshots. Placement backend claims remain omitted to retain the approved description. The authentic downloadable PDF predates iGEN; visible notes disclose that limitation.
