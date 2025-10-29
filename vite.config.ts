import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.resolve(__dirname, 'src/styles/globals.scss')}" as *;`
      }
    }
  },
  build: {
    minify: true,
    sourcemap: false
  },
})
