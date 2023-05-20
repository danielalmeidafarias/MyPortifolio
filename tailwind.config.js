/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins',
        alt: 'Ubuntu'
      },
      fontSize: {
        sm: '16px',
        base: '18px',
        lg: '20px',
        xl: '24px',
        '2xl': '30px',
        '3xl': '36px',
        '4xl': '48px',
        '5xl': '60px',
        '6xl': '72px',
        '7xl': '96px',
        '8xl': '128px',
        '9xl': '156px',

      }
    },

  },
  plugins: [],
}

