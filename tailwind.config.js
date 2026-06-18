/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FDFAF5',
          100: '#F8F0E3',
          200: '#F0DFC0',
        },
        ink: {
          900: '#0D0D0D',
          800: '#1A1A1A',
          700: '#2A2A2A',
          600: '#3D3D3D',
        },
        gold: {
          400: '#C9A84C',
          500: '#B8932E',
          600: '#9A7A1E',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(3deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-2deg)' },
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
