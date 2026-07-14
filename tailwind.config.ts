import type { Config } from "tailwindcss"
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        accent: {
          DEFAULT: '#2563EB',
          light: '#60A5FA',
          deep: '#1D4ED8',
        },
        gold: {
          DEFAULT: '#B08D57',
          light: '#D4B996',
          deep: '#8A6B3F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'soft': '0 4px 40px -8px rgba(0,0,0,0.05)',
        'glow': '0 0 30px rgba(37,99,235,0.15)',
        'gold-glow': '0 0 40px rgba(176,141,87,0.25)',
        'lift': '0 20px 60px -12px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
export default config
