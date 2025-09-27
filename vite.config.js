import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // You can set this to '/' for Netlify or './' for GitHub Pages
  base: '/', 
})