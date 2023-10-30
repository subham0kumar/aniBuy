/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'hitto' : ['Hitto'],
      'ukiyo' : ['Ukiyo'],
      'agbalumo' : ['Agbalumo'],
      'genjiro': ['Genjiro']
    },
    extend: {
      boxShadow: {
        '3xl': '0px 8px 16px 0px rgba(0,0,0,0.2)',
        '4xl': '4px 8px 16px 4px rgba(0,0,0,0.2)',
        'inHeavy': 'inset 4px 8px 16px 4px rgb(0 0 0 / 0.05)',
        'neumorph':  '20px 20px 60px #bebebe,-20px -20px 60px #ffffff',
      },
      colors: {
        'action' : '#8667F2',
        'action2' : '#1463F3',
        'second' : '#E0E7FF',
        'malibu' : '#84A4FC',
        'neutralamL' : 'hsla(290, 100%, 80%, .75)',
        'ghost' : '#CCD0D8',
        'neutralam' : '#EE99FF',
      },
      backgroundImage :{
        'lGradient' :'linear-gradient(135deg, hsla(290, 100%, 80%, 1) 33%, hsla(0, 0%, 100%, 1) 88%)',
      }

    },
  },
  plugins: [],
}

