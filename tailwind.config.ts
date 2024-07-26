import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mocha: {
          100: "#D5AA81",
          200: "#9C6F44",
          300: "#724E2C",
          400: "#563517",
        },

        vanilla: {
          100: "#F9F9F9",
        },

        obsidian: {
          100: "#0B1215",
        },
      },
    },
  },
  plugins: [],
};
export default config;
