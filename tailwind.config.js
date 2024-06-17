/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'grey-900': "var(--grey-900)",
      'grey-500': "var(--grey-500)",
      'red': "var(--red)",
      'green-200': "var(--green-200)",
      'green-600': "var(--green-600)",
      'green-600-darker': "var(--green-600-darker)",
    },
    spacing: {
      '100': '8px',
      '150': '12px',
      '200': '16px',
      '300': '24px',
      '400': '32px',
      '500': '40px',
      '1600': '128px',
    },
    screens: {
      'mobile': '375px',
      'tablet': '768px',
      'desktop': '1440px'
    },
    extend: {},
  },
  plugins: [
    formsPlugin,
  ],
}

