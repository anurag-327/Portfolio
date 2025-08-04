import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-up": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        rotatePositive: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(12deg)" },
        },
        rotateNegative: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-12deg)" },
        },
        scaleUp: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        moveUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1 " },
        },
      },

      animation: {
        "marquee-left": "marquee-left var(--duration, 30s) linear infinite",
        "marquee-up": "marquee-up var(--duration, 30s) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        rotatePositive: "rotatePositive 1s infinite",
        rotateNegative: "rotateNegative 1s infinite",
        scaleUp: "scaleUp 0.5s ease-out forwards",
        moveUp: "moveUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
