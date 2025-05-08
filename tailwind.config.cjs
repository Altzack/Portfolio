// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#121212", // page background
        surface: "#181818", // cards, sections
        text: "#EDEDED", // primary text
        secondary: "#B3B3B3", // muted captions
        accent: "#1DB954", // highlight/links
      },
    },
  },
  plugins: [],
};
