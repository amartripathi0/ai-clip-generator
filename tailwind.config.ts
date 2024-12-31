import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        caption: "fadeInOut 3s ease-out forwards",
      },
      keyframes: {
        fadeInOut: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "50%": { opacity: "100", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.8)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
