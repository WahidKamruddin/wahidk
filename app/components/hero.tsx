import type { CSSProperties, ReactNode } from "react";

const NOTION_URL =
  "https://low-centaur-4a2.notion.site/24879d01f30580389689e2a00edc6b4f?v=24879d01f30581f797b3000c6c8ab662&source=copy_link";

// CSS-driven entrance so content is never trapped behind a JS animation.
function Reveal({
  i,
  className,
  children,
}: {
  i: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`block motion-safe:animate-reveal ${className ?? ""}`}
      style={{ animationDelay: `${0.12 + i * 0.13}s` } as CSSProperties}
    >
      {children}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-[clamp(20px,6vw,96px)] pb-[clamp(48px,8vh,96px)] pt-[clamp(96px,12vh,160px)]"
    >
      {/* background: warm radial wash + grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 8%, #F1DFC9 0%, rgba(241,223,201,0) 58%), radial-gradient(90% 70% at 4% 96%, #EFE3D3 0%, rgba(239,227,211,0) 62%)",
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-50 mix-blend-multiply"
      >
        <filter id="heroGrain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves={3}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#heroGrain)" opacity="0.22" />
      </svg>

      <div className="relative mx-auto w-full max-w-[1340px]">
        <Reveal
          i={0}
          className="mb-[clamp(20px,4vh,44px)] flex items-center gap-[14px]"
        >
          <span className="h-px w-[clamp(28px,5vw,64px)] bg-mocha-600" />
          <span className="text-[clamp(10px,1vw,12px)] font-normal uppercase tracking-[0.34em] text-mocha-600">
            Welcome to
          </span>
        </Reveal>

        <h1 className="text-[clamp(58px,13vw,208px)] font-light leading-[0.86] tracking-[-0.035em]">
          <Reveal i={1} className="text-mocha-800">
            Wahid&apos;s
          </Reveal>
          <Reveal
            i={2}
            className="pl-[clamp(0px,6vw,118px)] font-extralight text-mocha-700"
          >
            Code <span className="font-light text-mocha-600">Café</span>
            <span className="text-mocha-800">.</span>
          </Reveal>
        </h1>

        <div className="mt-[clamp(40px,8vh,92px)] flex flex-wrap items-end justify-between gap-[clamp(24px,5vw,72px)]">
          <div className="flex flex-wrap items-end gap-[clamp(16px,2vw,24px)]">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-mocha-800 px-7 py-[15px] text-[14px] tracking-[0.05em] text-cream-50 transition-[background-color,transform] duration-[350ms] ease-out hover:-translate-y-0.5 hover:bg-mocha-900"
            >
              Get in touch
              <span className="h-px w-[14px] bg-current" />
            </a>
            <a
              href={NOTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-[rgba(86,53,23,0.3)] px-[26px] py-[15px] text-[14px] font-light text-mocha-800 transition-[background-color,border-color,transform] duration-[350ms] ease-out hover:-translate-y-0.5 hover:border-mocha-800 hover:bg-[rgba(213,170,129,0.24)]"
            >
              <span className="h-[15px] w-[13px] rounded-[2px_2px_6px_6px] border border-current" />
              Full portfolio
            </a>
          </div>

          <Reveal
            i={3}
            className="max-w-[34ch] text-[clamp(14px,1.15vw,17px)] font-light leading-[1.62] text-hero-blurb [text-wrap:pretty]"
          >
            Full-stack developer and designer in New York City. Warm interfaces,
            careful details, a lot of cappuccinos.
          </Reveal>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[clamp(18px,4vh,40px)] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 motion-safe:animate-nudge">
        <span className="text-[10px] uppercase tracking-[0.3em] text-mocha-600">
          Scroll
        </span>
        <span className="h-[26px] w-px bg-gradient-to-b from-mocha-600 to-transparent" />
      </div>
    </section>
  );
}
