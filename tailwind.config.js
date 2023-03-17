/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1099px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1180px',
        // => @media (min-width: 1536px) { ... }
      },
    extend: {
      screens: {
        'xs':{'min':'320px' , 'max':'639px'},
        '3xl':{'min':'1181px','max':'1280px'},
        '4xl':{'min':'1281px', 'max':'1380px'},
        '5xl':{'min':'1381px', 'max':'1480px'},
        '6xl':{'min':'1481px', 'max':'1580px'},
        '7xl':{'min':'1581px','max':'1680px'},
        '8xl':{'min':'1681px','max':'1780px'},
        '9xl':{'min':'1781px','max':'1880px'},
        '10xl':{'min':'1881px','max':'1980px'},
        '11xl':{'min':'1981px','max':'2080px'}
      }
    },
  },
  plugins: [],
}