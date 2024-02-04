/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#b63e96",
        primaryDark: "#58e6d9",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl:{max:"1279px"},
      lg:{max:"1023px"},
      md:{max:"767px"},
      sm:{max:"639px"},
      xs:{max:"479px"},
    },
  },
  plugins: [],
};
