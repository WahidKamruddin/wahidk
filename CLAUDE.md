# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

DO NOT COMMIT SAYING "IN PARTNERSHIP WITH CLAUDE CODE"> When I tell you to commite, make descriptive commit messages but don't say "CO Authored" by claude or anything like that.
## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint (flat config — eslint.config.mjs)
npx tsc --noEmit # type-check without emitting
```

No test suite is configured. `next lint` was removed in Next 16, so `npm run lint` runs `eslint .` directly against `eslint.config.mjs`.

## Architecture

Next.js App Router portfolio site — "Code Café". A single continuously scrolling
page (Hero → About → Work → Contact), no route changes for the main experience.

- `app/layout.tsx` — root layout, Poppins font (weights 100–600), global metadata (OpenGraph, Twitter cards, robots, canonical). `metadataBase` is `https://wahidkamruddin.vercel.app`. Contains JSON-LD `Person` schema injected via `<script type="application/ld+json">` in the body. `<body>` carries the `bg-cream-50 text-body` base. Do **not** add hardcoded `images` to the `openGraph` / `twitter` metadata objects — the OG image is served by `opengraph-image.tsx`.
- `app/opengraph-image.tsx` — Next.js `ImageResponse` OG image: 1200×630 PNG, mocha-palette design (☕ Code Café. brand tag, large name, subtitle, URL).
- `app/icon.tsx` — `ImageResponse` favicon: 32×32 PNG, "WK" in Poppins SemiBold on `#9C6F44`.
- `app/page.tsx` — composition: `<ChromeProvider>` wrapping `<Nav>`, `<SectionDots>`, `<Hero>`, `<About>`, `<Work>`, `<Contact>`.
- `app/globals.css` — Tailwind layers + `scroll-behavior: smooth` on `html` (disabled under `prefers-reduced-motion`).
- `next.config.mjs` — pins `turbopack.root` to this dir (a stray parent-dir lockfile otherwise misleads Next's workspace-root inference).

### Shared code

- `app/lib/projects.ts` — the single typed `PROJECTS` array. The Work gallery panels and the left-hand project list both read it so they can't drift apart.
- `app/lib/motion.ts` — `clamp` / `seg` / `lerp` / `ease` (cubic in-out) helpers for the Work scroll story.
- `app/lib/contact.ts` — `CONTACT_EMAIL` + the typed `CONTACT_CARDS` list (Email, LinkedIn, Instagram, GitHub) used by the contact section.
- `app/hooks/useTypewriter.ts` — character-by-character role cycler (105ms type / 55ms delete / 1500ms hold / 320ms gap). Returns a static first word under `prefers-reduced-motion`.
- `app/components/tech-icon.tsx` — `react-icons` map for every `TechKey` (languages + technologies) plus social logos, with `tint` / `brand` / `invert` props (`invert` renders the monochrome-black brands in `MONO` as cream on dark surfaces). `techLabel()` + `SOCIAL_ICONS`. All brand icons are bundled here — no `cdn.simpleicons.org` at runtime.

### Component responsibilities

- **`chrome-provider.tsx`** (`"use client"`) — context holding `inside` (the "inside the cup" flag that drives the dark nav inversion, set by `<Work>`) and `active` (the section index for the dots, computed here from one scroll listener). `useChrome()`.
- **`nav.tsx`** (`"use client"`) — fixed nav bar; reads `useChrome().inside` and swaps to its dark variant. `WK.` wordmark + `Code Café` lockup, three section links. No audio control.
- **`section-dots.tsx`** (`"use client"`) — right-edge fixed dots, `aria-current` + visible focus ring, inverts with `inside`.
- **`hero.tsx`** (server) — landing section. Warm radial gradient + inline `feTurbulence` grain. CSS-driven entrance (`animate-reveal` keyframe, staggered `animationDelay`) so content is never trapped behind a JS animation.
- **`about.tsx`** (`"use client"`) — layered ghost/real "About me" header, circular `next/image` portrait (`/images/picture.jpeg`, `object-[72%_78%]`), `useTypewriter` role line with a blinking caret, bio paragraph (client's own copy — do not rewrite), and the `SKILL_GROUPS`
  chip groups (Languages, Frameworks & Libraries, Mobile, Databases, Cloud & DevOps, Testing, Tools) rendered from `TechKey` lists with brand-colored `react-icons` logos.
- **`work.tsx`** (`"use client"`) — the signature scroll story. See below. Renders `<WorkStatic>` (a plain stacked list) instead when `prefers-reduced-motion`.
- **`project-panel.tsx`** (server) — one project's content (meta row, title, description, tech pills, CTA / "In progress", screenshot). Shared by the Work gallery and the reduced-motion fallback.
- **`contact.tsx`** (server) — `bg-cream-100`. "Last call" eyebrow, "Keep in touch." heading, link cards from `CONTACT_CARDS`, footer. Hover states are pure CSS (no client boundary).

### work.tsx — the brew-and-dive scroll story

Outer `<div ref={stageRef} className="relative h-[900vh]">` holding a
`sticky top-0 h-screen overflow-hidden` viewport. One `requestAnimationFrame`
loop reads `p = scrollYProgress.get()` (`useScroll` on the stage) and writes
every animated style to element refs. Every value is a pure function of `p`
except the gallery snap (time-based). `diveScale` and the responsive panel
measurements are recomputed from `window` (on resize / each frame).

| p window | beat |
|---|---|
| 0 – 0.06 | headline `letter-spacing` crushes `-0.02em → -0.5em`, then hard-cuts to `visibility:hidden` |
| 0.06 – 0.175 | two 13vmin beans (`mocha-300` / `mocha-700`) fall toward center |
| 0.175 – 0.32 | 30vmin coffee disc (`bg-coffee`) scales `0.44 → 1` |
| 0.30 – 0.44 | ceramic rim (ring) + handle fade in; handle `scaleX 0 → 1` outward |
| 0.46 – 0.60 | whole vessel scales to `diveScale` (covers the viewport diagonal) |
| 0.55 – 0.63 | `bg-espresso` world fades up; `pointer-events` on past 0.9; nav inverts past `t7 > 0.6` |
| 0.63 – 0.99 | horizontal gallery — `w-[400%]` track, four `w-1/4` panels, 620ms cubic-in-out snap between panels |

The cup pieces live inside a zero-size anchor (`left-1/2 top-1/2 h-0 w-0`)
centered in the viewport; each piece is placed relative to it with `translate`.
The handle's left edge sits at `17vmin` from center — clear of the 15vmin disc
radius, so it reads as a handle *outside* the coffee. The rAF loop composes the
centering translate into every `transform` it writes (e.g.
`translate(-50%,-50%) scale(...)`), never a bare `scale(...)`.

The gallery's left project list is hidden below 900px; panel left-padding is
derived so the two panel columns keep ~530px and never stack (a stacked panel
overflows the 100vh stage). Arrow keys move between panels; list buttons carry
`aria-current`.

### Styling

Tailwind theme in `tailwind.config.ts`:

| Group | Tokens |
|---|---|
| `mocha` | 900 `#3A2412`, 800 `#563517`, 700 `#724E2C`, 600 `#9C6F44`, 400 `#C29A72`, 300 `#D5AA81` |
| `cream` | 50 `#FBF8F4`, 100 `#F2E7DA`, 200 `#EFE3D3`, 300 `#F1DFC9` |
| flat | `ceramic` `#E4D7C6`, `espresso` `#24160C`, `coffee` `#2E2015`, `coffee-deep` `#2E1C0E`, `body` `#4A3018`, `body-alt` `#5A3D22`, `foot` `#7A5836`, `hero-blurb` `#6B4B2E` |
| `inv` (inside the cup) | 100 `#F6EFE6`, 200 `#E7D6C2`, 300 `#C9B49C`, 400 `#8E7358` |
| status | `status-live` `#9CB59A` |

Keyframes/animations: `caret` (blink), `nudge` (scroll cue), `reveal` (hero
entrance). `entrance` transition-timing-function = `cubic-bezier(.22,.61,.36,1)`.
Display type is all `clamp()`, weights 200/300 dominant. Wide arbitrary
`rgba()` values (nav backdrop, inverted borders, screenshot shadow) stay inline.

### Client boundary

Only components using hooks / browser APIs carry `"use client"`: `chrome-provider`,
`nav`, `section-dots`, `about`, `work`, `useTypewriter`. `page.tsx`, `hero.tsx`,
`project-panel.tsx`, `contact.tsx` are server components.

### External links

All `target="_blank"` links must include `rel="noopener noreferrer"`. Use plain
`<a>` for external URLs — Next.js `<Link>` is for internal navigation only.
