module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
      },
      colors: {
        primary: { DEFAULT: "#ff7f50", dark: "#f16e3e" },
        secondary: {
          DEFAULT: "rgba(245,178,178,0.7)",
          light: "#ed5e68",
          dark: "#c94a52",
        },
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "540px" },
      // => @media (max-width: 540px) { ... }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1124px",
        xl: "1124px",
        lg: "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
