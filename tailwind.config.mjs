/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#2A2D33',
        steel: '#46628B',
        cream: '#FAF7F2',
        purple: {
          deep: '#3D1F5C',
          mid: '#5C2D82',
          light: '#8B5CB8',
        },
        phoenix: {
          ember: '#E85D04',
          flame: '#F48C06',
          gold: '#FFBA08',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'phoenix-gradient': 'linear-gradient(135deg, #E85D04 0%, #F48C06 45%, #FFBA08 100%)',
        'purple-gradient': 'linear-gradient(135deg, #3D1F5C 0%, #6B3FA0 50%, #8B5CB8 100%)',
        'mesh': 'radial-gradient(at 40% 20%, rgba(107, 63, 160, 0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(244, 140, 6, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(70, 98, 139, 0.08) 0px, transparent 50%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
