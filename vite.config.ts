import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@screens': path.resolve(__dirname, './src/screens'),
      '@api': path.resolve(__dirname, './src/api'),
    },
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
})
