import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: process.env.VITE_ASSET_PROXY === '1'
    ? {
        proxy: {
          '/foxhole': 'http://localhost:8000',
          '/includes': 'http://localhost:8000',
        },
      }
    : undefined,
  build: {
    outDir: 'dist-bundle',
  },
})
