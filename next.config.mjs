import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // A stray package-lock.json in a parent directory otherwise makes Next infer
  // the wrong workspace root. Pin it to this project.
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
};

export default nextConfig;
