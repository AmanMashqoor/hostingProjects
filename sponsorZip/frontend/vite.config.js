import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 6556,
    proxy: {
      '/sponsor': {
        target: 'http://localhost:5555',
        changeOrigin: true,
      } 
    },
    // '/api': {
    //   target: 'http://someapi.com',
    //   changeOrigin: true,
    //   rewrite: (path) => path.replace(/^\/api/, '')
    // },
    host: true,
  }
})
