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
        primary: "#000000",
        secondary: "#FFB800",
        success: "#10B981",
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        lexend: ['var(--font-lexend)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
