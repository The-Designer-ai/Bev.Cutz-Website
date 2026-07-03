import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        blood: "#D71920",
        oxblood: "#8B0000"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 55px rgba(215, 25, 32, 0.25)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 70px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        "radial-red": "radial-gradient(circle at center, rgba(215,25,32,0.18), transparent 48%)"
      }
    }
  },
  plugins: []
};

export default config;
