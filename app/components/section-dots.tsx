"use client";

import { SECTION_IDS, useChrome } from "./chrome-provider";

const LABELS = ["Top", "About", "Work", "Contact"];

export default function SectionDots() {
  const { active, inside } = useChrome();

  return (
    <div className="fixed right-[clamp(10px,1.6vw,22px)] top-1/2 z-[88] flex -translate-y-1/2 flex-col gap-[14px]">
      {SECTION_IDS.map((id, i) => {
        const isActive = active === i;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={LABELS[i]}
            aria-current={isActive ? "true" : undefined}
            className={[
              "h-[9px] w-[9px] rounded-full border transition-all duration-300",
              "outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
              inside
                ? "border-[#C29A72] focus-visible:ring-inv-200"
                : "border-mocha-600 focus-visible:ring-mocha-600",
              isActive
                ? inside
                  ? "scale-[1.35] bg-inv-200"
                  : "scale-[1.35] bg-mocha-800"
                : "bg-transparent",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
}
