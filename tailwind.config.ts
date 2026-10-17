import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(14vw, 12vh, 0) scale(1.2)" },
        },
        float2: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1.1)" },
          "50%": { transform: "translate3d(-16vw, 8vh, 0) scale(0.9)" },
        },
        float3: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(10vw, -14vh, 0) scale(1.25)" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float1: "float1 18s ease-in-out infinite",
        float2: "float2 23s ease-in-out infinite",
        float3: "float3 27s ease-in-out infinite",
        rise: "rise 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
