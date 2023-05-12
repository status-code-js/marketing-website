/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        cyan: "#E9F7FF",
        red: "#FFDBD4",
        yellow: "#FFF3CA",
        black: "#292930",
        white: "#FFFFFF"
      }
    },
  },
  plugins: [],
}

