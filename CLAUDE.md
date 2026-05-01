# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint
npx tsc --noEmit # type-check without emitting
```

No test suite is configured.

## Architecture

Next.js App Router portfolio site. All routes live under `app/`; reusable components are in `app/components/`:

- `app/layout.tsx` — root layout, Poppins font, global metadata + OpenGraph/Twitter cards. `metadataBase` is `https://wahidkamruddin.vercel.app`.
- `app/page.tsx` — single-page composition: `<Hero>`, `<Me>`, `<Projects>`, `<Contact>`, with `<AudioPlayer>` fixed top-right
- `app/icon.tsx` — Next.js `ImageResponse` favicon: 32×32 PNG, "WK" text in Poppins SemiBold on `mocha-200` (`#9C6F44`) background.
- `app/globals.css` — Tailwind base + smooth `scroll-behavior: smooth` on `html` + Embla Carousel CSS variables

### Component responsibilities

- **`hero.tsx`** — landing section with Framer Motion entrance animations (`opacity: 0→1`, `x/y` slides). All animation variants use `opacity: 1` (not `100`).
- **`me.tsx`** — about section; uses `useInView` with `once: false` so animations replay on scroll, and `useTypewriter` for the cycling role text.
- **`projects.tsx`** — the most complex component. Scroll-driven coffee cup animation followed by a vertical project carousel. See full breakdown below.
- **`contact.tsx`** — server component. Social links with an inline SVG `<linearGradient>` for the Instagram hover gradient. SVG attributes must use camelCase (`stopColor`, not `stop-color`).
- **`audio.tsx`** — lofi audio toggle, `"use client"`, refs a static `/music/lofi.mp3`.
- **`loading.tsx`** — standalone loading screen (not used in the main page flow currently).

### projects.tsx — scroll animation sequence

The component is `h-[1000vh]` tall with a `sticky` inner container, so `scrollYProgress` (0→1) maps to the entire scroll distance of the section. Every visual element is driven by `useTransform` against that single progress value.

The container must keep `overflow-clip` (not `overflow-hidden`). `overflow-hidden` creates a scroll container, which causes Framer Motion to track the div's scroll instead of the window scroll and breaks all the transforms.

**Stage 1 — Text collapse (`0 → 0.05`)**
"Take a sip / of my best work." is visible at rest. As the user starts scrolling, `letterSpacing` animates from `0px` to `-37px`, squishing the letters together until the text disappears (`display: none`).

**Stage 2 — Two balls merge (`0.05 → 0.15`)**
Two circles appear: Ball A (`mocha-100`, light tan) starts above center and moves down 4rem; Ball B (`mocha-300`, medium brown) starts below center and moves up 4rem. They converge to the same point, visually blending the two brown tones. Both balls hide at `0.15`.

**Stage 3 — Merged ball grows (`0.15 → 0.35`)**
A single `mocha-200` ball appears at the merge point and scales from `1x` to `2x`, representing the two colors combining into a coffee body.

**Stage 4 — Cup forms (`0.35 → 0.45`)**
The growing ball transitions into the cup: a `mocha-200` circle with a `border-gray-300` border (the cup rim) replaces the big ball and scales from `2.25x` to `2.3x`. Simultaneously, the handle — a `bg-gray-300` rounded rectangle anchored to the right of the cup — `scaleX`s from `0` to `1`, extending outward.

**Stage 5 — Cup slides to position (`0.45 → 0.55`)**
The cup body and handle translate together: `x: 0 → -35rem`, `y: 0 → -15rem`, moving the cup to the upper-left of the viewport to make room for the projects.

**Stage 6 — Project cards cascade in (`0.5 → 0.95`)**
Four project cards are all absolutely positioned in the same spot. Each starts at `y: -1000` (above viewport) and slides down to `y: 550`, staggered so they arrive one after another as the user scrolls:

| Project | Scroll range | Color accent |
|---|---|---|
| Mellow Mind (lofi soundboard) | `0.50 → 0.65` | `bg-red-900` |
| Fitbyte (coming soon) | `0.55 → 0.75` | `bg-orange-500` |
| After School Startup | `0.65 → 0.85` | `bg-indigo-600` |
| Sheikh AI | `0.75 → 0.95` | `bg-lime-900` |

Each card has a colored `absolute` background div that blurs and scales on hover, with the project screenshot on top. Tech stack icons appear below each card. Fitbyte has no link (`cursor-not-allowed` on the image) since it's not yet live.

### Styling

Custom Tailwind color palette in `tailwind.config.ts`:

| Token | Hex |
|---|---|
| `mocha-100` | `#D5AA81` (light tan) |
| `mocha-200` | `#9C6F44` |
| `mocha-300` | `#724E2C` |
| `mocha-400` | `#563517` (darkest brown) |
| `vanilla-100` | `#F9F9F9` |
| `obsidian-100` | `#0B1215` |

### Client boundary

Only components that use hooks or browser APIs carry `"use client"`. `app/page.tsx` is a server component — client context comes from each component declaring it individually (`audio.tsx`, `hero.tsx`, `me.tsx`, `projects.tsx`).

### External links

All `target="_blank"` links must include `rel="noopener noreferrer"`. Use plain `<a>` tags for external URLs — Next.js `<Link>` is for internal navigation only.
