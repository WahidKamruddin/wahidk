import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        mocha: {
          900: "#3A2412",
          800: "#563517",
          700: "#724E2C",
          600: "#9C6F44",
          400: "#C29A72",
          300: "#D5AA81",
        },
        cream: {
          50: "#FBF8F4",
          100: "#F2E7DA",
          200: "#EFE3D3",
          300: "#F1DFC9",
        },
        ceramic: "#E4D7C6",
        espresso: "#24160C",
        coffee: "#2E2015",
        "coffee-deep": "#2E1C0E",
        body: "#4A3018",
        "body-alt": "#5A3D22",
        foot: "#7A5836",
        "hero-blurb": "#6B4B2E",
        inv: {
          100: "#F6EFE6",
          200: "#E7D6C2",
          300: "#C9B49C",
          400: "#8E7358",
        },
        "status-live": "#9CB59A",
      },
      keyframes: {
        caretBlink: {
          "0%,45%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
        nudge: {
          "0%,100%": { transform: "translateY(0)", opacity: ".55" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
        reveal: {
          from: { opacity: "0", transform: "translateY(26px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        caret: "caretBlink 1s step-end infinite",
        nudge: "nudge 2.6s ease-in-out infinite",
        reveal: "reveal .9s cubic-bezier(.22,.61,.36,1) both",
      },
      transitionTimingFunction: {
        entrance: "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },
  plugins: [],
};
export default config;
