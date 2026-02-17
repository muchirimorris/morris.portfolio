/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0F3D2E', // Deep Green
                    50: '#f2fcf5',
                    100: '#e1f8e8',
                    200: '#c3eed3',
                    300: '#94deb5',
                    400: '#5ac592',
                    500: '#34a872',
                    600: '#268759',
                    700: '#216c49',
                    800: '#1e563d',
                    900: '#0F3D2E', // Base Primary
                    950: '#0B0F0C', // Darkest
                },
                accent: {
                    DEFAULT: '#22C55E', // Light Green
                    glow: '#4ade80',
                },
                dark: '#0B0F0C',      // Deep Background
                light: '#F0FDF4',     // Light Greenish-White (Mint Cream)
                surface: '#121814',   // Card Surface
                secondary: '#9CA3AF', // Gray Text
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Inter', 'sans-serif'], // Ensure bold headings use main font
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
