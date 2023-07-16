/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    screens: {
      'sm': {'max': '640px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'max': '1120px'},
      'xl': {'max': '1280px'},
      '2xl': {'max': '1536px'},
      '2md': {'max': '767px'},
    },
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
        '480': '480px',
        '520': '520px',
        '620': '620px',
      },
      maxWidth: {
        '415': '415px'
      },
      height: {
        'screen/70': '70vh',
      }
    },
  },
  plugins: [],
}

