/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        background: '#030712',
        surface: '#0f172a',
        bordercolor: 'rgba(255,255,255,0.06)',
        muted: '#94a3b8',
        primary: '#3b82f6',
        success: '#00ffae',
        warning: '#facc15',
        danger: '#ff4d6d',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl2: '24px',
      },
      boxShadow: {
        glow: '0 0 30px rgba(59,130,246,0.15)',
      },
    },
  },
  plugins: [],
}