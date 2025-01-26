/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      theme: '#005FB4',
      'osseous-theme': 'white',
      'ordinary-text-theme': 'rgb(30 30 30)',
      ...colors,
    },
    extend: {
      spacing: {},
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.flex-center': {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
        '.stretching': {
          width: '100%',
          height: '100%',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
  ],
}
