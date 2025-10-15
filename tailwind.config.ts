import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Palette algérienne
        algerian: {
          green: {
            DEFAULT: "#006233",
            dark: "#006233",
            light: "#1FA27A",
          },
          red: {
            DEFAULT: "#D21034",
            dark: "#D21034",
            light: "#F15B5B",
          },
        },
        primary: {
          DEFAULT: "#006233",
          light: "#1FA27A",
          dark: "#004d28",
        },
        accent: {
          DEFAULT: "#D21034",
          light: "#F15B5B",
          dark: "#a50d2a",
        },
        gray: {
          DEFAULT: "#2C2C2C",
          dark: "#2C2C2C",
          light: "#E9ECEF",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
