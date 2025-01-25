/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      theme: '#005FB4',
      'osseous-theme': 'white',
      'ordinary-text': 'rgb(30 30 30)',
      'color-for-hover': 'rgb(240 240 240)',
      ...colors,
    },
    extend: {
      spacing: {
        '56-px': '56px',
      },
    },
  },
  plugins: [],
}
