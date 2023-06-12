/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        fig: ['Figtree', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#edfcee',
          200: '#dcf9dc',
          300: '#caf7cb',
          400: '#b9f4b9',
          500: '#a7f1a8',
          600: '#86c186',
          700: '#649165',
          800: '#436043',
          900: '#213022',
        },
      },
    },
  },
  plugins: [require('daisyui')],
}
