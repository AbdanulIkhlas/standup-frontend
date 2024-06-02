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
      boxShadow: {
        profileShadow:
          "9px 9px 10px -3px rgba(255,255,255,0.7), 9px 9px 10px -3px rgba(255,255,255,0.7), 9px 9px 10px -3px rgba(255,255,255,0.7);",
        secondShadow:
          "0px 8px 14px -4px rgba(255,255,255,1), 0px 8px 14px -4px rgba(255,255,255,1),  0px 8px 14px -4px rgba(255,255,255,1);",
        thirdShadow:
          "13px 13px 8px -11px rgba(53,49,49,0.75), 13px 13px 8px -11px rgba(53,49,49,0.75),  13px 13px 8px -11px rgba(53,49,49,0.75);", // Added thirdShadow
      },
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
