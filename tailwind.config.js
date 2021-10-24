module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ], // remove unused styles in production
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        84: "21rem",
        86: "21.5rem",
        88: "22rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
