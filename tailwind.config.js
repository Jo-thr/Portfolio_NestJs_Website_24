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
      fontFamily: {
        dm: ['var(--font-dm-serif)'],
        allison: ['var(--font-allison)'],
        inter: ['var(--font-inter)'],
      },
      animation: {
        'text-reveal':
          'text-reveal 2s cubic-bezier(0.77, 0, 0.175, 1) 0.2s forwards',
        appear: 'appear 1s cubic-bezier(0.77, 0, 0.175, 1) 2s forwards',
        deappear: 'deappear 0.5s cubic-bezier(0.77, 0, 0.175, 1) 2s forwards',
        reveal: 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'reveal-tb': 'revealtb 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards',
      },
      keyframes: {
        'text-reveal': {
          '0%': {
            transform: 'translate(0, 110%)',
            opacity: 0,
          },
          '30%': {
            transform: 'translate(0, 0)',
            opacity: 1,
          },
          '70%': {
            transform: 'translate(0, 0)',
            opacity: 1,
          },
          '100%': {
            transform: 'translate(0, -110%)',
            opacity: 0,
          },
        },
        reveal: {
          from: { transform: 'translate(0, 110%)', opacity: 0 },
          to: { transform: 'translate(0, 0)', opacity: 1 },
        },
        revealtb: {
          from: { transform: 'translate(0, -110%)', opacity: 0 },
          to: { transform: 'translate(0, 0)', opacity: 1 },
        },
        deappear: {
          '0%': { display: 'block', visibility: 'block', opacity: 1 },
          '100%': { display: 'none', visibility: 'hidden', opacity: 0 },
        },
        appear: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
