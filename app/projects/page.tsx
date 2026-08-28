import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, type Project } from "../lib/projects";
import { TechIcon, techLabel } from "../components/tech-icon";

export const metadata: Metadata = {
  title: "Projects | Wahid Kamruddin",
  description:
    "A gallery of things Wahid Kamruddin has built — web apps, AI tools, and design work in Next.js, React, and TypeScript.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Wahid Kamruddin",
    description: "A gallery of things Wahid Kamruddin has built.",
    url: "/projects",
    type: "website",
  },
};

// Bento spans — each project claims a different footprint so the grid reads
// as a composition rather than a uniform list. Index-aligned with PROJECTS.
const LAYOUT = [
  "sm:col-span-6 lg:col-span-4 lg:flex-row", // feature — image beside copy
  "sm:col-span-3 lg:col-span-2", // tall-ish card
  "sm:col-span-3 lg:col-span-2",
  "sm:col-span-6 lg:col-span-4 lg:flex-row-reverse",
] as const;

export default function ProjectsPage() {
  return (
    <main className="flex min-h-[100dvh] flex-col bg-cream-100">
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

      <div className="mx-auto w-full max-w-[1340px] flex-1 px-[clamp(20px,6vw,96px)] py-[clamp(28px,6vh,72px)]">
        <div className="mb-[clamp(36px,7vh,80px)] max-w-[52ch]">
          <p className="mb-[clamp(14px,3vh,26px)] text-[clamp(10px,1vw,12px)] uppercase tracking-[0.34em] text-mocha-600">
            The menu
          </p>
          <h1 className="text-[clamp(44px,8vw,120px)] font-extralight leading-[0.96] tracking-[-0.035em] text-mocha-800">
            Projects<span className="text-mocha-600">.</span>
          </h1>
          <p className="mt-[clamp(16px,3vh,26px)] text-[clamp(15px,1.2vw,18px)] font-light leading-[1.62] text-body-alt">
            Everything I&apos;ve brewed so far — shipped products, works in
            progress, and the odd experiment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[clamp(14px,1.8vw,24px)] sm:grid-cols-6 lg:grid-cols-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.num}
              project={project}
              className={LAYOUT[i] ?? "sm:col-span-3 lg:col-span-2"}
            />
          ))}
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

function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className: string;
}) {
  const live = project.status === "live";

  const inner = (
    <>
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-[16px] bg-cream-200 lg:aspect-auto lg:min-h-[200px] lg:flex-[1_1_46%]">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 1024px) 90vw, 620px"
          className="object-cover object-top transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-[clamp(18px,2vw,28px)]">
        <div className="mb-[clamp(12px,2vh,18px)] flex items-center gap-3">
          <span className="text-[11px] tracking-[0.3em] text-mocha-400">
            {project.num}
          </span>
          <span className="h-px w-6 bg-[rgba(156,111,68,0.5)]" />
          <span className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: live ? "#9CB59A" : "#C29A72" }}
            />
            <span className="text-[10px] uppercase tracking-[0.2em] text-mocha-600">
              {live ? "Live" : "Coming soon"}
            </span>
          </span>
        </div>

        <h2
          className={`font-extralight leading-[1.04] tracking-[-0.03em] text-mocha-800 ${
            project.compactTitle
              ? "text-[clamp(24px,2.6vw,38px)]"
              : "text-[clamp(26px,2.8vw,42px)]"
          }`}
        >
          {project.name}
        </h2>

        <p className="mt-[clamp(8px,1.4vh,14px)] max-w-[42ch] text-[clamp(13px,1vw,15px)] font-light leading-[1.6] text-body-alt">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-[clamp(16px,2.4vh,24px)]">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(86,53,23,0.16)] py-1.5 pl-2.5 pr-[13px] text-[11px] font-light tracking-[0.06em] text-mocha-700"
            >
              <TechIcon tech={tech} brand />
              {techLabel(tech)}
            </span>
          ))}
        </div>

        <div className="mt-[clamp(16px,2.4vh,22px)]">
          {project.href ? (
            <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-mocha-700 transition-colors group-hover:text-mocha-900">
              Visit site
              <span className="h-px w-[14px] bg-current transition-[width] duration-300 group-hover:w-[22px]" />
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full border border-[rgba(86,53,23,0.2)] px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-mocha-600">
              In progress
            </span>
          )}
        </div>
      </div>
    </>
  );

  const shell =
    "group flex flex-col overflow-hidden rounded-[22px] border border-[rgba(86,53,23,0.1)] bg-[rgba(251,248,244,0.62)] transition-[background-color,border-color,transform,box-shadow] duration-[350ms] ease-out hover:-translate-y-[3px] hover:border-[rgba(86,53,23,0.26)] hover:bg-cream-50 hover:shadow-[0_24px_60px_-32px_rgba(58,36,18,0.4)]";

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${shell} ${className}`}
      >
        {inner}
      </a>
    );
  }

  return <div className={`${shell} ${className}`}>{inner}</div>;
}
