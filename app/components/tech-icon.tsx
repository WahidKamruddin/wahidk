import type { IconType } from "react-icons";
import {
  FaFigma,
  FaGithub,
  FaInstagram,
  FaJava,
  FaLinkedinIn,
  FaReact,
  FaRegEnvelope,
} from "react-icons/fa";
import {
  SiAmazonaws,
  SiAnthropic,
  SiBootstrap,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPlaywright,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiSupabase,
  SiSwift,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import type { TechKey } from "../lib/projects";

const ICONS: Record<TechKey, IconType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  sql: TbSql,
  cpp: SiCplusplus,
  java: FaJava,
  html: SiHtml5,
  css: SiCss3,
  react: FaReact,
  "react-native": FaReact,
  next: SiNextdotjs,
  node: SiNodedotjs,
  express: SiExpress,
  expo: SiExpo,
  swift: SiSwift,
  postgres: SiPostgresql,
  mongodb: SiMongodb,
  prisma: SiPrisma,
  aws: SiAmazonaws,
  docker: SiDocker,
  "claude-code": SiAnthropic,
  firebase: SiFirebase,
  supabase: SiSupabase,
  netlify: SiNetlify,
  nginx: SiNginx,
  playwright: SiPlaywright,
  git: SiGit,
  github: FaGithub,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  flask: SiFlask,
  tensorflow: SiTensorflow,
  figma: FaFigma,
  vite: SiVite,
  gemini: SiGooglegemini,
};

const LABELS: Record<TechKey, string> = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  python: "Python",
  sql: "SQL",
  cpp: "C++",
  java: "Java",
  html: "HTML5",
  css: "CSS",
  react: "React",
  "react-native": "React Native",
  next: "Next.js",
  node: "Node.js",
  express: "Express",
  expo: "Expo",
  swift: "Swift",
  postgres: "PostgreSQL",
  mongodb: "MongoDB",
  prisma: "Prisma",
  aws: "AWS",
  docker: "Docker",
  "claude-code": "Claude Code",
  firebase: "Firebase",
  supabase: "Supabase",
  netlify: "Netlify",
  nginx: "Nginx",
  playwright: "Playwright",
  git: "Git",
  github: "GitHub",
  tailwind: "Tailwind",
  bootstrap: "Bootstrap",
  flask: "Flask",
  tensorflow: "TensorFlow",
  figma: "Figma",
  vite: "Vite",
  gemini: "Gemini",
};

/**
 * Simple Icons brand hex. Brands whose real mark is monochrome black are listed
 * in MONO — on a dark surface pass `invert` and they render in cream instead.
 */
const BRAND: Record<TechKey, string> = {
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  python: "#3776AB",
  sql: "#4479A1",
  cpp: "#00599C",
  java: "#E76F00",
  html: "#E34F26",
  css: "#1572B6",
  react: "#61DAFB",
  "react-native": "#61DAFB",
  next: "#111111",
  node: "#5FA04E",
  express: "#111111",
  expo: "#111111",
  swift: "#F05138",
  postgres: "#4169E1",
  mongodb: "#47A248",
  prisma: "#2D3748",
  aws: "#FF9900",
  docker: "#2496ED",
  "claude-code": "#D97757",
  firebase: "#F57C00",
  supabase: "#3FCF8E",
  netlify: "#00C7B7",
  nginx: "#009639",
  playwright: "#2EAD33",
  git: "#F05032",
  github: "#111111",
  tailwind: "#38BDF8",
  bootstrap: "#7952B3",
  flask: "#111111",
  tensorflow: "#FF6F00",
  figma: "#F24E1E",
  vite: "#A171F8",
  gemini: "#8AB4F8",
};

/** Brands whose mark is monochrome black — invert to cream on dark surfaces. */
const MONO = new Set<TechKey>([
  "next",
  "express",
  "expo",
  "prisma",
  "github",
  "flask",
]);

export function techLabel(key: TechKey) {
  return LABELS[key];
}

export function TechIcon({
  tech,
  size = 15,
  tint,
  brand = false,
  invert = false,
  className,
}: {
  tech: TechKey;
  size?: number;
  /** Explicit color; overrides `brand`. */
  tint?: string;
  /** Use the icon's brand color. */
  brand?: boolean;
  /** On a dark surface, render monochrome-black brands in cream. */
  invert?: boolean;
  className?: string;
}) {
  const Icon = ICONS[tech];
  const brandColor = invert && MONO.has(tech) ? "#F6EFE6" : BRAND[tech];
  const color = tint ?? (brand ? brandColor : undefined);
  return (
    <Icon size={size} color={color} className={className} aria-hidden />
  );
}

export const SOCIAL_ICONS = {
  email: FaRegEnvelope,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  github: FaGithub,
} as const;
