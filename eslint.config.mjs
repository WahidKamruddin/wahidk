import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const config = [
  { ignores: [".next/**", "node_modules/**", "design_handoff_code_cafe/**"] },
  ...nextCoreWebVitals,
  ...nextTypescript,
];

export default config;
