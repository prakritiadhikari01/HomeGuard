module.exports = {
  content: [
    './templates/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        background: '#030712',
        card: '#0f172a',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      boxShadow: {
        glow: '0 0 40px rgba(59,130,246,0.15)',
      },

      backdropBlur: {
        xs: '2px',
      },

    },
  },
  plugins: [],
}