/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: '12px',
      sm: '15px',
      xl: '2rem',
      base: '20px',
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),
    extend: {
      width: {
        xxs: '16rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
      maxHeight: {
        0: '0',
        '25vh': '25vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '90vh': '90vh',
        full: '100vh',
      },
      maxWidth: {
        xxs: '16rem',
        xs: '20rem',
      },
      screens: {
        xxs: '320px',
        xs: '360px',
        s: '400px',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
