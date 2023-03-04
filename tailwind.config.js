/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "dark",
    {
      // Backgrounds
      pattern: /^bg-.+$/,
      variants: ["dark", "hover"],
    },
    {
      // Borders
      pattern: /^border-[^/]+$/,
      variants: ["dark"],
      // variants: ["dark", "hover", "focus", "focus-visible", "group-hover"],
    },
    // {
    //   // Ring Color
    //   pattern: /^ring-[^/]+$/,
    // },
    {
      // Text Color
      pattern: /^text-[^/]+$/,
      variants: ["dark"],
    },
    {
      // Outline Color
      pattern: /^outline-[^/]+$/,
      variants: ["dark", "hover"],
    },
    // {
    //   // Gradients
    //   pattern: /^(from|to|via)-[^/]+$/,
    //   variants: ["dark", "hover", "focus", "focus-visible"],
    // },
    {
      //Widths
      pattern: /^w-[^/]+$/,
      variants: ["dark"],
    },
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#0f172a",
        primary: "#1a2035",
        primaryLight: "#1f283e",
        blue: {
          1000: "#1f283e",
          1100: "#060e29",
        },
        purple: {
          1000: "#46166b",
          1100: "#1c062e",
          // 1000: "#1f3e26",
        },
        emerald: {
          1000: "#054030",
          1100: "#011711",
          // 1000: "#1f3e26",
        },
        red: {
          1000: "#520606",
          1100: "#260303",
          // 1000: "#1f3e26",
        },
      },
      spacing: {
        26: "6.5rem",
        100: "26rem",
        104: "27rem",
        106: "28rem",
        108: "29rem",
        110: "30rem",
        120: "40rem",
        130: "50rem",
        140: "60rem",
        150: "70rem",
        160: "80rem",
        170: "90rem",
        180: "100rem",
      },
    },
  },
  plugins: [],
};
