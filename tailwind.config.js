module.exports = {
  content: [
    "./src/pages/**/*.{jsx, js}",
    "./src/features/**/*.{jsx, js}",
    "./src/ui/**/*.{jsx, js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        black: ["AirbnbCerealBlack", "sans"],
        book: ["AirbnbCerealBook", "sans"],
        light: ["AirbnbCerealLight", "sans"],
        medium: ["AirbnbCerealMedium", "sans"],
        bold: ["AirbnbCerealBold", "sans"],
        beast: ["Obelix", "sans"],
      },
      colors: {
        red: {
          DEFAULT: "#F82D47",
          50: "#FEDFE3",
          100: "#FDCBD1",
          200: "#FCA3AF",
          300: "#FB7C8C",
          400: "#F9546A",
          500: "#F82D47",
          600: "#E50824",
          700: "#AF061B",
          800: "#790413",
          900: "#42020A",
        },
        gray: {
          DEFAULT: "#161616",
          50: "#DAD8D9",
          100: "#CFCDCD",
          200: "#B8B5B6",
          300: "#A29E9E",
          400: "#8B8687",
          500: "#747070",
          600: "#5D5959",
          700: "#454343",
          800: "#2E2C2C",
          900: "#161616",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
