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
        white: "#FFFFFF",
        blue: "#5956E8",
        grey1: "#D0D0D0",
        grey2: "#424245",
        grey3: "#36363E",
        grey4: "#292930",
        grey5: "#F7F7F7",
        grey6: "#E2E2E2",
        grey7: "#D3D3D3",
        grey8: "#555555",
        green: "#4FE5D2"
      },
      width: {
        '480': '480px'
      },
      maxWidth: {
        '415': '415px'
      }
    },
  },
  plugins: [],
}

