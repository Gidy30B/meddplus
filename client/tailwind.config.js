/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        ReditMono: ['ReditMono', 'monospace'],
      },
      colors: {
        dark: {
          DEFAULT: '#1a202c',
          100: '#2d3748',
          200: '#4a5568',
          300: '#718096',
          400: '#a0aec0',
          500: '#cbd5e0',
          600: '#e2e8f0',
          700: '#edf2f7',
          800: '#f7fafc',
          900: '#ffffff',
        },
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#1a202c',
      }),
      textColor: theme => ({
        ...theme('colors'),
        'primary': '#ffffff',
      }),
    },
  },
  plugins: [],
}
