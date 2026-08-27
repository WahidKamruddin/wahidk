# Code Café — wahidkamruddin.com

Personal portfolio for Wahid Kamruddin, a full-stack developer and designer in
NYC. A single scrolling page (Hero → About → Work → Contact) built around the
"Code Café" theme. The Work section is a scroll-driven story: the headline
collapses into two coffee beans, the beans merge into a cup, the camera dives
*into* the cup, and a dark "espresso world" holds a horizontal snap-to-screen
gallery of the projects.

## Stack

- Next.js (App Router) + React
- Tailwind CSS — theme tokens in `tailwind.config.ts`
- Framer Motion — entrance animations and the Work scroll driver
- `react-icons` — bundled brand/social logos

## Commands

```bash
npm run dev        # dev server at localhost:3000
npm run build      # production build
npm run lint       # ESLint (flat config, eslint.config.mjs)
npx tsc --noEmit   # type-check
```

No test suite is configured.

## Layout

```
app/
  layout.tsx            root layout, Poppins, metadata + JSON-LD Person schema
  page.tsx              composes the four sections inside <ChromeProvider>
  icon.tsx              generated favicon (WK)
  opengraph-image.tsx   generated 1200x630 OG image
  components/
    chrome-provider.tsx shared nav state (inside-the-cup inversion, active section)
    nav.tsx             fixed nav bar (inverts dark inside the cup)
    section-dots.tsx    right-edge section indicator
    hero.tsx / about.tsx / work.tsx / contact.tsx
    project-panel.tsx   one project's content, shared by the gallery + reduced-motion fallback
    tech-icon.tsx       tech/social icon map
  hooks/useTypewriter.ts
  lib/projects.ts       the single typed PROJECTS array
  lib/motion.ts         seg / lerp / ease helpers for the scroll story
```

Reduced-motion (`prefers-reduced-motion`) skips the brew story and renders Work
as a plain stacked list.
