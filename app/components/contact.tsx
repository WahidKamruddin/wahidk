import Link from "next/link";
import { CONTACT_CARDS } from "../lib/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-[56px] bg-cream-100 px-[clamp(20px,6vw,96px)] pb-[clamp(32px,5vh,56px)] pt-[clamp(88px,16vh,180px)]"
    >
      <div className="mx-auto flex w-full max-w-[1340px] flex-col gap-[clamp(48px,9vh,110px)]">
        <div className="flex flex-wrap items-end justify-between gap-[clamp(28px,5vw,72px)]">
          <div>
            <p className="mb-[clamp(14px,3vh,26px)] text-[clamp(10px,1vw,12px)] uppercase tracking-[0.34em] text-mocha-600">
              Last call
            </p>
            <h2 className="text-[clamp(44px,8vw,128px)] font-extralight leading-[0.96] tracking-[-0.035em] text-mocha-800">
              Keep in <span className="font-light text-mocha-600">touch</span>
              <span className="text-mocha-800">.</span>
            </h2>
          </div>
          <div className="flex max-w-[34ch] flex-col gap-[clamp(16px,3vh,24px)]">
            <p className="text-[clamp(15px,1.2vw,18px)] font-light leading-[1.62] text-body-alt">
              Always up for a coffee, a collaboration, or a good problem to solve.
            </p>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-mocha-800 px-[clamp(20px,2.2vw,28px)] py-[clamp(12px,1.8vh,16px)] text-[clamp(12px,1vw,14px)] font-light uppercase tracking-[0.16em] text-cream-50 transition-[background-color,transform] duration-[350ms] ease-out hover:-translate-y-[2px] hover:bg-mocha-900"
            >
              Write a message
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {CONTACT_CARDS.map((card) => {
            const Icon = card.icon;
            const external = card.href.startsWith("http");
            return (
              <a
                key={card.platform}
                href={card.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex flex-[1_1_240px] items-center justify-between gap-5 rounded-[18px] border border-[rgba(86,53,23,0.1)] bg-[rgba(251,248,244,0.62)] px-[clamp(20px,2.4vw,32px)] py-[clamp(20px,3vh,30px)] transition-[background-color,border-color,transform] duration-[350ms] ease-out hover:-translate-y-[3px] hover:border-[rgba(86,53,23,0.28)] hover:bg-cream-50"
              >
                <span className="flex flex-col gap-[5px]">
                  <span className="text-[10px] uppercase tracking-[0.26em] text-mocha-600">
                    {card.platform}
                  </span>
                  <span className="break-all text-[clamp(16px,1.4vw,21px)] font-light text-mocha-800">
                    {card.handle}
                  </span>
                </span>
                <Icon size={26} className="shrink-0 text-mocha-800" aria-hidden />
              </a>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-[rgba(86,53,23,0.14)] pt-[clamp(20px,3vh,32px)]">
          <span className="text-[12px] font-light tracking-[0.04em] text-foot">
            Brewed in New York City
          </span>
          <span className="text-[12px] font-light tracking-[0.04em] text-foot">
            © 2026 Wahid Kamruddin
          </span>
        </div>
      </div>
    </section>
  );
}
