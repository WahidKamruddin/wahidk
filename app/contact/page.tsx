import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_CARDS } from "../lib/contact";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact | Wahid Kamruddin",
  description:
    "Send Wahid Kamruddin a message directly, or reach out on LinkedIn, Instagram, or GitHub.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Wahid Kamruddin",
    description: "Send Wahid Kamruddin a message directly.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="flex min-h-[100dvh] flex-col bg-cream-100 lg:h-[100dvh] lg:overflow-hidden">
      <header className="flex items-center justify-between px-[clamp(16px,4vw,56px)] py-[15px]">
        <Link href="/" className="flex items-baseline">
          <span className="text-2xl font-medium leading-none tracking-[-0.03em] text-mocha-800">
            WK
          </span>
          <span className="text-2xl font-medium leading-none text-mocha-600">
            .
          </span>
        </Link>
        <Link
          href="/"
          className="text-[13px] font-light uppercase tracking-[0.1em] text-mocha-700 transition-colors hover:text-mocha-900"
        >
          &larr; Back home
        </Link>
      </header>

      <div className="flex flex-1 items-center px-[clamp(20px,6vw,96px)] py-[clamp(24px,5vh,64px)]">
        <div className="mx-auto grid w-full max-w-[1180px] gap-[clamp(40px,6vw,88px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center">
          {/* left — intro + direct channels */}
          <div className="flex flex-col gap-[clamp(24px,4vh,40px)]">
            <div>
              <p className="mb-[clamp(12px,2.4vh,20px)] text-[clamp(10px,1vw,12px)] uppercase tracking-[0.34em] text-mocha-600">
                Say hello
              </p>
              <h1 className="text-[clamp(40px,6.4vw,88px)] font-extralight leading-[0.98] tracking-[-0.035em] text-mocha-800">
                Let&apos;s <span className="font-light text-mocha-600">talk</span>
                <span className="text-mocha-800">.</span>
              </h1>
              <p className="mt-[clamp(16px,3vh,26px)] max-w-[38ch] text-[clamp(15px,1.2vw,18px)] font-light leading-[1.62] text-body-alt">
                Fill out the card and it lands straight in my inbox. Prefer
                something else? I&apos;m around here too.
              </p>
            </div>

            <ul className="flex flex-col gap-2">
              {CONTACT_CARDS.map((card) => {
                const Icon = card.icon;
                const external = card.href.startsWith("http");
                return (
                  <li key={card.platform}>
                    <a
                      href={card.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-[14px] border border-[rgba(86,53,23,0.1)] bg-[rgba(251,248,244,0.55)] px-[clamp(16px,1.8vw,22px)] py-[clamp(12px,1.8vh,16px)] transition-[background-color,border-color,transform] duration-300 ease-out hover:-translate-y-[2px] hover:border-[rgba(86,53,23,0.28)] hover:bg-cream-50"
                    >
                      <Icon
                        size={20}
                        className="shrink-0 text-mocha-700"
                        aria-hidden
                      />
                      <span className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-[0.26em] text-mocha-600">
                          {card.platform}
                        </span>
                        <span className="break-all text-[clamp(14px,1.2vw,17px)] font-light text-mocha-800">
                          {card.handle}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* right — the message card */}
          <div className="rounded-[24px] border border-[rgba(86,53,23,0.12)] bg-[rgba(251,248,244,0.72)] p-[clamp(22px,3.2vw,44px)] shadow-[0_24px_60px_-32px_rgba(58,36,18,0.4)] backdrop-blur-[6px]">
            <p className="mb-[clamp(16px,2.6vh,24px)] text-[10px] uppercase tracking-[0.26em] text-mocha-600">
              New message
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      <footer className="flex flex-wrap justify-between gap-3 px-[clamp(20px,6vw,96px)] pb-[clamp(16px,3vh,28px)] pt-[clamp(12px,2vh,20px)]">
        <span className="text-[12px] font-light tracking-[0.04em] text-foot">
          Brewed in New York City · wahidkamruddin.com
        </span>
        <span className="text-[12px] font-light tracking-[0.04em] text-foot">
          © 2026 Wahid Kamruddin
        </span>
      </footer>
    </main>
  );
}
