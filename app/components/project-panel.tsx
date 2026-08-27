import Image from "next/image";
import type { Project } from "../lib/projects";
import { TechIcon, techLabel } from "./tech-icon";

/** One project's content — shared by the scroll gallery and the reduced-motion stack. */
export function ProjectPanelContent({ project }: { project: Project }) {
  const live = project.status === "live";
  const screenshot = (
    <div className="relative aspect-[1400/900] max-h-[56vh] w-full max-w-[560px] flex-[1_1_380px] overflow-hidden rounded-[20px] shadow-[0_3vh_8vh_rgba(0,0,0,0.45)]">
      <Image
        src={project.image}
        alt={project.alt}
        fill
        sizes="(max-width: 900px) 90vw, 560px"
        className="object-cover object-top"
      />
    </div>
  );

  return (
    <>
      <div className="flex-[1_1_270px] max-w-[400px]">
        <div className="mb-[clamp(12px,2.2vh,22px)] flex items-center gap-3">
          <span className="text-[11px] tracking-[0.3em] text-mocha-400">
            {project.num}
          </span>
          <span className="h-px w-6 bg-[rgba(194,154,114,0.6)]" />
          <span className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: live ? "#9CB59A" : "#C29A72" }}
            />
            <span
              className={`text-[10px] uppercase tracking-[0.2em] ${
                live ? "text-inv-200" : "text-inv-300"
              }`}
            >
              {live ? "Live" : "Coming soon"}
            </span>
          </span>
        </div>

        <h3
          className={`font-extralight leading-[1.02] tracking-[-0.03em] text-inv-100 ${
            project.compactTitle
              ? "text-[clamp(30px,4vw,60px)]"
              : "text-[clamp(32px,4.2vw,64px)]"
          }`}
        >
          {project.name}
        </h3>

        <p className="mt-[clamp(10px,1.8vh,18px)] text-[clamp(14px,1.1vw,17px)] font-light leading-[1.6] text-inv-300">
          {project.description}
        </p>

        <div className="mt-[clamp(18px,3vh,30px)] flex flex-wrap gap-2 border-t border-[rgba(246,239,230,0.14)] pt-[clamp(14px,2.4vh,22px)]">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(246,239,230,0.22)] py-1.5 pl-2.5 pr-[13px] text-[11px] font-light tracking-[0.07em] text-inv-200"
            >
              <TechIcon tech={tech} brand />
              {techLabel(tech)}
            </span>
          ))}
        </div>

        <div className="mt-[clamp(18px,3vh,30px)]">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-cream-100 px-6 py-[13px] text-[13px] tracking-[0.05em] text-coffee-deep transition-[background-color,transform] duration-[350ms] ease-out hover:-translate-y-0.5 hover:bg-mocha-300"
            >
              Visit site
              <span className="h-px w-[14px] bg-current" />
            </a>
          ) : (
            <span className="inline-flex items-center rounded-full border border-[rgba(246,239,230,0.24)] px-6 py-[13px] text-[13px] tracking-[0.05em] text-inv-300">
              In progress
            </span>
          )}
        </div>
      </div>

      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-[1_1_380px] justify-center transition-transform duration-500 ease-out hover:-translate-y-1.5"
        >
          {screenshot}
        </a>
      ) : (
        <div className="flex flex-[1_1_380px] justify-center">{screenshot}</div>
      )}
    </>
  );
}
