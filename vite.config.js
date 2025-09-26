import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // FIX: Changed base path to relative ('./') to resolve asset pathing issues on GitHub Pages.
  base: './', 
})