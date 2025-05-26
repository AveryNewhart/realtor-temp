import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/realtor-temp/', // This must match your repository name
  plugins: [vue()],
  server: {
    host: true, // Listen on all network interfaces
    port: 8888, // Default Vite port
  }
})