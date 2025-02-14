import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f5f5',
          100: '#e9e9e9',
          200: '#d9d9d9',
          300: '#c4c4c4',
          400: '#9d9d9d',
          500: '#7b7b7b',
          600: '#555555',
          700: '#434343',
          800: '#262626',
          900: '#171717',
        },
        accent: '#FF3B30'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} satisfies Config