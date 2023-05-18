/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto Mono',
        alt: 'Ubuntu'
      }
    },
    screens: {
      'sm': '360px',
      'md': '640px',
      'lg': '768px',
      'xl': '1024px'
    },
  },
  plugins: [],
}

