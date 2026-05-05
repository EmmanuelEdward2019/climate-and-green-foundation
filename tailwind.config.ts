import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#1C5E2C',
        'forest-green-dark': '#164825',
        'lime-green': '#3ABE2C',
        'lime-green-dark': '#2fa024',
        'neutral-bg': '#F7F8F6',
        'section-divider': '#EDF2ED',
        'text-primary': '#1A1A1A',
        'text-secondary': '#5F6368',
        'border-color': '#E5E7EB',
      },
      fontFamily: {
        garamond: ['EB Garamond', 'Georgia', 'serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
        'scroll-indicator': 'scrollIndicator 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollIndicator: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(10px)', opacity: '0.5' },
        },
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(135deg, #1C5E2C 0%, #2a7a3e 100%)',
        'gradient-lime': 'linear-gradient(135deg, #3ABE2C 0%, #2fa024 100%)',
      },
    },
  },
  plugins: [],
}

export default config
