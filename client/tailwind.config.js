/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      'abril': ['"Abril Fatface"', 'cursive'],
      'didactGothic': ['"Didact Gothic"', 'sans-serif'],
      'Montserrat': ['"Montserrat"', 'sans-serif'],
      'Philosopher': ['"Philosopher"', 'sans-serif'],
      'Quicksand': ['"Quicksand"', 'sans-serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    extend: {},
  },
  plugins: [],
}
