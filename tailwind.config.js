/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        lufga: ['Lufga', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter var', 'sans-serif'],
      },
      colors: {
        background: '#F7F9F8',
        heading: '#0A0A0A',
        body: '#4A4A4A',
        border: '#E5E7EB',
        accent: '#3B82F6',
        ranking: '#FFD700',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      width: {
        modal: {
          sm: '20rem',  // 320px
          md: '28rem',  // 448px
          lg: '32rem',  // 512px
          xl: '36rem',  // 576px
        },
      },
      maxWidth: {
        modal: {
          sm: '20rem',  // 320px
          md: '28rem',  // 448px
          lg: '32rem',  // 512px
          xl: '36rem',  // 576px
        },
      },
    },
  },
  plugins: [],
};
