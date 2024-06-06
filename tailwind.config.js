import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["lofi"],
  },
  theme: {
    extend: {
      width: {
        144: "36rem", // or '576px
      },
      fontFamily: {
        garamond: ["Garamond Classico SC", "serif"],
      },
    },
  },
  plugins: [daisyui],
};
