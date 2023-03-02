/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#0f172a",
        primary: "#1a2035",
        primaryLight: "#1f283e",
      },
    },
  },
  plugins: [],
};
