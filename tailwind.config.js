/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'orange': '#cc4400',      // Naranja oscuro
          'orange-light': '#ff5722', // Naranja medio
          'blue': '#1a237e',        // Azul oscuro 
          'blue-light': '#3949ab',   // Azul medio
          'dark': '#0a0a0a',        // Negro profundo
          'gray': '#1a1a1a',        // Gris muy oscuro
        }
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'mouse-follow': 'mouseFollow 0.1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #cc4400, 0 0 10px #cc4400' },
          '100%': { boxShadow: '0 0 10px #cc4400, 0 0 20px #cc4400, 0 0 30px #cc4400' },
        },
        mouseFollow: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--mouse-x), var(--mouse-y))' },
        }
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #cc4400 0%, #1a237e 100%)',
        'primary-gradient-soft': 'linear-gradient(135deg, rgba(204, 68, 0, 0.1) 0%, rgba(26, 35, 126, 0.1) 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        '-20': '-20',
        '100': '100',
        '1000': '1000',
      },
      perspective: {
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backdropBlur: {
        '4xl': '72px',
        '5xl': '96px',
      }
    },
  },
  plugins: [],
  // Safelist para clases dinámicas
  safelist: [
    'z--1',
    'z--10',
    'z--20',
    'z-100',
    'z-1000',
    'perspective-500',
    'perspective-1000',
    'perspective-1500',
    'perspective-2000',
  ]
} 