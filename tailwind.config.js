/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        fantasy: ['"IM Fell English"', 'serif'],
      },
      colors: {
        'primary': '#7D2E68',
        'secondary': '#2C5F2D',
        'accent': '#FFD700',
        'background': '#1D3557',
        'success': '#10B981',
        'warning': '#FBBF24',
        'error': '#EF4444',
      },
      animation: {
        'dice-roll': 'dice-roll 1s ease-out',
        'fade-in': 'fade-in 0.5s ease-in',
        'slide-in': 'slide-in 0.3s ease-out',
      },
      keyframes: {
        'dice-roll': {
          '0%': { transform: 'rotate(0deg) translateY(-50px)', opacity: 0 },
          '50%': { transform: 'rotate(720deg) translateY(0)', opacity: 1 },
          '75%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};