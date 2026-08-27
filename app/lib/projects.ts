export type TechKey = "react" | "next" | "typescript" | "tailwind" | "figma";

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
    name: "Mellow Mind",
    status: "live",
    description:
      "Lo-fi soundboard for focus — layer jazz, rain, chatter and fireplace.",
    stack: ["react", "tailwind"],
    href: "https://wahidkamruddin.github.io/lofi-soundboard/",
    image: "/images/1.png",
    alt: "Mellow Mind lo-fi soundboard",
  },
  {
    num: "02",
    name: "Fitbyte",
    status: "soon",
    description: "AI fitness tracker that builds and adapts your training plan.",
    stack: ["react", "next", "tailwind", "figma"],
    image: "/images/2.png",
    alt: "Fitbyte fitness tracker",
  },
  {
    num: "03",
    name: "After School Startup",
    status: "live",
    description:
      "Nonprofit platform bringing entrepreneurship programs to students.",
    stack: ["react", "next", "tailwind", "figma"],
    href: "https://www.afterschoolstartup.com/",
    image: "/images/3.png",
    alt: "After School Startup landing page",
    compactTitle: true,
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
