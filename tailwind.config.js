module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_4c: "#ffffff4c", A700_01: "#fdfdfd", A700: "#ffffff" },
        gray: {
          100: "#f7f7f7",
          200: "#e7e7e7",
          300: "#e6e6e6",
          500: "#919191",
          600: "#757575",
          700: "#5a5a5a",
          900: "#422323",
          "600_01": "#6c6c6c",
        },
        blue_gray: { 100: "#d1d5db", 400: "#888888", "100_01": "#d9d9d9" },
        black: { 900: "#000000" },
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
