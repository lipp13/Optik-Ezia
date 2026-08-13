import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ezia: {
          ivory: "#FBFBF9",
          charcoal: "#121314",
          black: "#0A0A0A",
          "warm-gray": "#EAE8E3",
          "cool-gray": "#F3F3F0",
          champagne: "#E5DFC8",
          "champagne-light": "#F7F4EB",
          accent: "#2D4B50",
          "accent-light": "#E4ECEB",
          "accent-muted": "#688488",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
