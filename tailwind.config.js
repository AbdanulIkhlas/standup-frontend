/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#360e10",
        // secondary: "#10b981",
        pale: "#D9D9D9",
      },
      // boxShadow: {
      //   cardShadow: "0 5px 16px 0 rgba(0, 0, 0, 0.15)",
      //   buttonShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      // },
      // borderRadius: {
      //   customRounded: "52% 48% 48% 52% / 50% 54% 46% 50% ",
      // },
      // width: {
      //   round: "calc(100% - 160px)",
      // },
    },
  },
  plugins: [],
};
