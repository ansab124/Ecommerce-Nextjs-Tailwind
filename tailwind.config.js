const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './layout/**/*.{js,ts,jsx,tsx}'

  ],
  theme: {
    container: {
      center: true,
      DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      },

    },
  },
  plugins: [],
}
