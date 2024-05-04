/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode variant

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
        // Example dark theme colors
        dark: {
          primary: '#1a202c', // Dark background color
          secondary: '#2d3748', // Dark secondary background color
          text: '#ffffff', // Text color
          accent: '#f6e05e', // Accent color
          // Add more colors as needed
        },
      },
    },
  },

  plugins: [],
}
