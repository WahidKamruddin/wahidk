"use client";

import Image from "next/image";
import type { TechKey } from "../lib/projects";
import { useTypewriter } from "../hooks/useTypewriter";
import { TechIcon, techLabel } from "./tech-icon";

const ROLES = ["developer.", "designer.", "coffee-addict."];
const CHIPS: TechKey[] = ["react", "next", "typescript", "tailwind", "figma"];

export default function About() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="about"
      className="scroll-mt-[56px] px-[clamp(20px,6vw,96px)] py-[clamp(88px,16vh,190px)]"
    >
      <div className="mx-auto w-full max-w-[1340px]">
        {/* layered header */}
        <div className="relative mb-[clamp(36px,7vh,78px)]">
          <span
            aria-hidden
            className="pointer-events-none absolute left-[-0.02em] top-[-0.28em] whitespace-nowrap text-[clamp(70px,15vw,240px)] font-thin leading-none tracking-[-0.04em] text-[rgba(213,170,129,0.34)]"
          >
            About me
          </span>
          <h2 className="relative pt-[clamp(30px,7vw,108px)] text-[clamp(11px,1.1vw,13px)] font-medium uppercase tracking-[0.34em] text-mocha-600">
            About me
          </h2>
        </div>

        <div className="flex flex-wrap items-start gap-[clamp(28px,5vw,80px)]">
          {/* portrait */}
          <div className="flex flex-[0_1_340px] flex-col gap-[14px] [min-width:min(100%,260px)]">
            <div className="relative aspect-square overflow-hidden rounded-full">
              <Image
                src="/images/picture.jpeg"
                alt="Wahid Kamruddin"
                fill
                sizes="(max-width: 640px) 100vw, 340px"
                className="object-cover object-[72%_78%]"
                priority
              />
            </div>
            <span className="text-[10px] uppercase tracking-[0.26em] text-mocha-600">
              New York City · 2026
            </span>
          </div>

          {/* copy */}
          <div className="flex-[1_1_380px] [min-width:min(100%,300px)]">
            <p className="text-[clamp(34px,5.4vw,84px)] font-extralight leading-[1.02] tracking-[-0.03em] text-mocha-800">
              Hi, I&apos;m Wahid,
            </p>
            <p className="text-[clamp(30px,4.7vw,74px)] font-extralight leading-[1.05] tracking-[-0.03em] text-mocha-400">
              a{" "}
              <span className="font-light text-mocha-800">{role}</span>
              <span className="ml-[0.06em] inline-block h-[0.82em] w-[0.06em] translate-y-[0.06em] bg-mocha-600 motion-safe:animate-caret" />
            </p>

            <p className="mt-[clamp(24px,4vh,42px)] max-w-[58ch] text-[clamp(16px,1.3vw,19px)] font-light leading-[1.68] text-body [text-wrap:pretty]">
              I&apos;m a Bangladeshi-American born and raised in NYC. I have a
              passion for cafes, coffee, and all things design. I love to create
              beautiful and functional digital experiences that make people&apos;s
              lives easier and more enjoyable. When I&apos;m not coding or
              designing, you can find me exploring new cafes, sipping on a
              cappuccino, or working on my next side project.
            </p>

            <div className="mt-[clamp(22px,3.4vh,36px)] flex flex-wrap gap-2">
              {CHIPS.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(86,53,23,0.2)] py-[7px] pl-[11px] pr-[14px] text-[12px] font-light tracking-[0.06em] text-body-alt"
                >
                  <TechIcon tech={tech} tint="#9C6F44" />
                  {techLabel(tech)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
