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
        bgprimary: {
          100: "#0D0D0D"
        },
        graycustom: "#737373",
        bluecustom: "#1672b6",
      },
    },
  },
  plugins: [],
} satisfies Config;
