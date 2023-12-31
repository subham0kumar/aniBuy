/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      hitto: ["Hitto"],
      ukiyo: ["Ukiyo"],
      agbalumo: ["Agbalumo"],
      genjiro: ["Genjiro"],
      chakra: ["Chakra Petch", "sans-serif"],
      exo: ["Exo", "sans-serif"],
      pacifico: ["Pacifico", "cursive"],
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "3xl": "0px 8px 16px 0px rgba(0,0,0,0.2)",
        "4xl": "4px 8px 16px 4px rgba(0,0,0,0.2)",
        inHeavy: "inset 4px 8px 16px 4px rgb(0 0 0 / 0.05)",
        neumorph: "20px 20px 60px rgba(0,0,0,0.2),-20px -20px 60px #1463F3",
        modal: "0 0 0 500vmax rgba(0,0,0,.5)",
      },
      colors: {
        action: "#8667F2",
        action2: "#1463F3",
        second: "#E0E7FF",
        malibu: "#84A4FC",
        neutralamL: "hsla(290, 100%, 80%, .75)",
        ghost: "#CCD0D8",
        neutralam: "#EE99FF",
      },
      backgroundImage: {
        lGradient:
          "linear-gradient(135deg, hsla(290, 100%, 80%, 1) 33%, hsla(0, 0%, 100%, 1) 88%)",
        thnx: "https://pa1.aminoapps.com/6137/34f5552d5eb726e30f38d5ebb5abc0693ef9a09b_hq.gif",
      },
    },
  },
  plugins: [],
};
