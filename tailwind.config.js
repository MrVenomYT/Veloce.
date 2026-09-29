/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#D4AF37",
          light: "#F0D37A",
          dark: "#B28D22",
          50: "#FAF8F0",
          100: "#F3EED8",
          200: "#E9DCAD",
          300: "#DEC77C",
          400: "#D4AF37",
          500: "#BE9623",
          600: "#9A7516",
          700: "#745412",
          800: "#523B11",
          900: "#38270F",
        },
        obsidian: {
          950: "#06080C",
          900: "#0B0E14",
          850: "#10141D",
          800: "#161C28",
          750: "#1D2536",
          700: "#273248",
        },
        dark: "#0B0E14",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },
    },
  },
  plugins: [],
};

