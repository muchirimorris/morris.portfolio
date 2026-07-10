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
                    DEFAULT: '#1A1A1A', // Dark Grey Surface
                    50: '#f6f6f6',
                    100: '#e7e7e7',
                    200: '#d1d1d1',
                    300: '#b0b0b0',
                    400: '#888888',
                    500: '#6d6d6d',
                    600: '#5d5d5d',
                    700: '#4f4f4f',
                    800: '#454545',
                    900: '#3d3d3d', // Card Surface
                    950: '#1A1A1A', // Base Primary
                },
                accent: {
                    DEFAULT: '#F59E0B', // Vibrant Orange
                    glow: '#FBBF24',
                },
                dark: '#0A0A0A',      // Deep Background (Almost Black)
                light: '#FAFAFA',     // Light Background
                surface: '#171717',   // Card Surface
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
