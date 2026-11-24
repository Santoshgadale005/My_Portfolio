/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#08090C',
        surface: '#101218',
        card: '#13161D',
        'ink-primary': '#F5F5F7',
        'ink-secondary': '#9298A5',
        accent: {
          blue: '#648CFF',
          violet: '#9475FF',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Geist Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        display: '-0.035em',
        heading: '-0.025em',
      },
      borderColor: {
        subtle: 'rgba(255, 255, 255, 0.08)',
        'subtle-hover': 'rgba(255, 255, 255, 0.16)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(100, 140, 255, 0.25), 0 12px 40px -12px rgba(100, 140, 255, 0.25)',
        'card-subtle': '0 1px 0 0 rgba(255, 255, 255, 0.05) inset, 0 20px 40px -24px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
