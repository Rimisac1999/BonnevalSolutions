/** @type {import('tailwindcss').Config} */
// Color values sourced from config/brand.ts (Brand Guidelines V0)
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors (§3.1)
        navy: '#000B24',
        red: {
          DEFAULT: '#E43606',
          light: '#F56E4E',
        },
        blue: {
          DEFAULT: '#008FB4',
          light: '#25BBE0',
        },
        gold: {
          DEFAULT: '#DE8D06',
          light: '#F5B520',
        },
        // Extended palette (§3.2)
        'off-white': '#F0F2F5',
        'mid-gray': '#6B7280',
        'dark-gray': '#1F2937',
        // Surface elevation (§3.6)
        'surface-1': '#030E42',
        'surface-2': '#061560',
        'surface-3': '#0C2088',
        // Semantic (§3.3)
        success: '#10B981',
        warning: '#DE8D06',
        error: '#E43606',
        info: '#3B82F6',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        brand: '1280px',
      },
      borderRadius: {
        card: '16px',
        pill: '9999px',
        input: '12px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
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
    },
  },
  plugins: [],
}
