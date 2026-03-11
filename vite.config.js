import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Conditionally set the base path based on Vercel or Netlify environment
  base: (process.env.VERCEL || process.env.NETLIFY) ? "/" : "/morris.portfolio/",
})
