export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // covers React (JS & TS)
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212", // page background
        surface: "#181818", // cards, sections
        text: "#EDEDED", // primary text
        secondary: "#B3B3B3", // muted text
        accent: "#4FD1C5", // buttons, links, highlights
        border: "#2A2A2A", // subtle lines/borders (optional)
      },
    },
  },
  plugins: [],
};
