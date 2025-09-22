import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configured for your ESL-Lessons repository.
  base: '/ESL-Lessons/', 
})

