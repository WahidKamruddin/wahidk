export type TechKey =
  // languages
  | "javascript"
  | "typescript"
  | "python"
  | "sql"
  | "cpp"
  | "java"
  | "html"
  | "css"
  // technologies
  | "react"
  | "react-native"
  | "next"
  | "node"
  | "express"
  | "expo"
  | "swift"
  | "postgres"
  | "mongodb"
  | "prisma"
  | "aws"
  | "docker"
  | "claude-code"
  | "firebase"
  | "supabase"
  | "netlify"
  | "nginx"
  | "playwright"
  | "git"
  | "github"
  | "tailwind"
  | "bootstrap"
  | "flask"
  | "tensorflow"
  | "figma"
  | "vite"
  | "gemini";

export type Project = {
  num: string;
  name: string;
  status: "live" | "soon";
  description: string;
  stack: TechKey[];
  href?: string;
  image: string;
  alt: string;
  /** Longer names use a slightly smaller title clamp. */
  compactTitle?: boolean;
};

// Single source of truth — the gallery panels and the left-hand project list
// both read from this so they can never drift out of sync.
// Descriptions are placeholders from the design; edit freely.
export const PROJECTS: Project[] = [
  {
    num: "01",
    name: "Yaply",
    status: "live",
    description:
      "Group chat that folds event planning, tasks, budgets and shared albums into one encrypted app.",
    stack: ["react", "typescript", "tailwind", "supabase"],
    href: "https://yaply.us",
    image: "/images/yaply.png",
    alt: "Yaply social app",
  },
  {
    num: "02",
    name: "Fit",
    status: "live",
    description:
      "AI wardrobe that catalogs your clothes and builds outfits by mood, style and weather.",
    stack: ["next", "typescript", "tailwind", "supabase", "gemini"],
    href: "https://fit-ai-closet.netlify.app",
    image: "/images/fit.png",
    alt: "Fit AI closet app",
  },
  {
    num: "03",
    name: "KTPTC",
    status: "live",
    description:
      "Live queue board for Khan's Tutorial parent-teacher conference nights — who's up, who's next.",
    stack: ["react", "typescript", "vite"],
    href: "https://ktptc.netlify.app",
    image: "/images/ktptc.png",
    alt: "KTPTC parent-teacher conference queue board",
  },
  {
    num: "04",
    name: "Sheikh AI",
    status: "live",
    description:
      "Ask questions, get sourced answers grounded in Islamic scholarship.",
    stack: ["react", "next", "tailwind", "figma"],
    href: "https://asksheikh.ai/",
    image: "/images/4.png",
    alt: "Sheikh AI chat interface",
  },
];
