/** @type {import('tailwindcss').Config} */

const COLORS = {
  white: {
    base: '#FFFDFA',
    light: '#F4F4F4',
    medium: '#D9D9D9',
    dark: '#767F87',
  },
  black: {
    base: '#121619',
    dark: '#1E2226',
    medium: '#333B42',
    light: '#313131',
  },
}

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...COLORS,
      },
    },
  },
  plugins: [],
}
