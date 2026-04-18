/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
        serif: ["Fraunces", "serif"],
      },
      colors: {
        accent: "#e8ff47",
        accent2: "#47ffd8",
      },
    },
  },
  plugins: [],
};
