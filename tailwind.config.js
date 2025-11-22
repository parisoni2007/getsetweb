/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#00f3ff', // Cyan/Neon Blue
          dim: 'rgba(0, 243, 255, 0.1)',
          glow: 'rgba(0, 243, 255, 0.5)',
        },
        dark: {
          bg: '#05050a', // Deep dark background
          card: '#0a0a12', // Slightly lighter for cards
          border: '#1a1a2e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px -5px rgba(0, 243, 255, 0.4)',
        'neon-hover': '0 0 30px -5px rgba(0, 243, 255, 0.6)',
      }
    },
  },
  plugins: [],
}
