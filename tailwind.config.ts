import type { Config } from "tailwindcss";

export default {
  content: ["./client/index.html", "./client/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      orbitron: ["Orbitron", "sans-serif"],
      digital: ["Space Mono", "monospace"],
      sans: ["Space Mono", "monospace"],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
} satisfies Config;
