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
  blue: {
    base: '#0123FF',
  },
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
