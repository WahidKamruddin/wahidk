"use client";

import { useChrome } from "./chrome-provider";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const { inside } = useChrome();

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-[90] flex items-center justify-between",
        "px-[clamp(16px,4vw,56px)] py-[15px]",
        "backdrop-blur-[14px] border-b transition-[background-color,border-color] duration-[400ms] ease-linear",
        inside
          ? "bg-[rgba(36,22,12,0.72)] border-[rgba(246,239,230,0.12)]"
          : "bg-[rgba(251,248,244,0.72)] border-[rgba(86,53,23,0.08)]",
      ].join(" ")}
    >
      <a href="#top" className="flex items-baseline gap-3">
        <span className="flex items-baseline">
          <span
            className={`text-2xl font-medium leading-none tracking-[-0.03em] transition-colors duration-[400ms] ${
              inside ? "text-inv-100" : "text-mocha-800"
            }`}
          >
            WK
          </span>
         
        </span>
        <span
          className={`text-[9px] font-light uppercase tracking-[0.28em] transition-colors duration-[400ms] ${
            inside ? "text-[#C29A72]" : "text-mocha-600"
          }`}
        >
          Wahid&nbsp;Kamruddin
        </span>
      </a>

      <div className="flex items-center gap-[clamp(14px,2.4vw,34px)]">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-[13px] font-light uppercase tracking-[0.1em] transition-colors duration-300 ${
              inside ? "text-[#C9B49C] hover:text-inv-100" : "text-mocha-700 hover:text-mocha-900"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
