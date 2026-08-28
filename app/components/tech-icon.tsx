import type { IconType } from "react-icons";
import {
  FaFigma,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
  FaRegEnvelope,
} from "react-icons/fa";
import {
  SiGooglegemini,
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import type { TechKey } from "../lib/projects";

const ICONS: Record<TechKey, IconType> = {
  react: FaReact,
  next: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  figma: FaFigma,
  vite: SiVite,
  supabase: SiSupabase,
  gemini: SiGooglegemini,
};

const LABELS: Record<TechKey, string> = {
  react: "React",
  next: "Next.js",
  typescript: "TypeScript",
  tailwind: "Tailwind",
  figma: "Figma",
  vite: "Vite",
  supabase: "Supabase",
  gemini: "Gemini",
};

/** Brand colors for the gallery tech pills (inside the dark cup). */
const BRAND: Record<TechKey, string> = {
  react: "#61DAFB",
  next: "#F6EFE6",
  typescript: "#3178C6",
  tailwind: "#38BDF8",
  figma: "#F24E1E",
  vite: "#A171F8",
  supabase: "#3ECF8E",
  gemini: "#8AB4F8",
};

export function techLabel(key: TechKey) {
  return LABELS[key];
}

export function TechIcon({
  tech,
  size = 15,
  tint,
  brand = false,
  className,
}: {
  tech: TechKey;
  size?: number;
  /** Explicit color; overrides `brand`. */
  tint?: string;
  /** Use the icon's brand color. */
  brand?: boolean;
  className?: string;
}) {
  const Icon = ICONS[tech];
  const color = tint ?? (brand ? BRAND[tech] : undefined);
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
