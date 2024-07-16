/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "18px",
        base: "25px",
        xl: "36px",
        "2xl": "40px",
        "3xl": "50px",
      },
      colors: {
        primary: "#274C5B",
        secondary: " #68A47F",
        third: "##EFD372",
        fourth: "#525C60",
        fifth: "#7EB693",
      },
      container: {
        center: true,
        padding: "40px",
        screens: {
          xl: "1380px",
        },
      },
    },
  },
  plugins: [],
};
