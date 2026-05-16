import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#8B5CF6",
          secondary: "#6D28D9",
          accent: "#C084FC",
          dark: "#09090B",
        },
      },

      animation: {
        "pulse-slow":
          "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },

  plugins: [],
};

export default config;
