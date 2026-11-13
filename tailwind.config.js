/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0d1b2a',
          navyLight: '#1b263b',
          gold: '#c5a059',
          goldLight: '#dfc184',
          cream: '#f4f1ea',
          ivory: '#faf9f6',
          slate: '#5c677d',
          charcoal: '#1f2421',
          border: '#e5e0d5',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        section: 'var(--spacing-section)',
        container: 'var(--spacing-container)',
      },
      boxShadow: {
        luxury: '0 20px 50px -15px rgba(13, 27, 42, 0.08)',
        luxuryHover: '0 25px 60px -12px rgba(13, 27, 42, 0.16)',
      },
    },
  },
  plugins: [],
};
