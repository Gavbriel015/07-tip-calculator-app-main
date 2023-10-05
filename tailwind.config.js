/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        verdeOscuro: "#00474B",
        verdeAgua: "#26C2AD",
      }
    },
    fontFamily: {
      spaceMono: ['Space Mono', 'sans'],
    }
  },
  plugins: [],
}

