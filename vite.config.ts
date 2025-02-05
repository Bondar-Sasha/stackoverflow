import {defineConfig} from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('src/Pages')) {
            const pageName = id.split('/').pop()?.replace('.tsx', '') || ''
            return `page-${pageName}`
          }
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': 'https://codelang.vercel.app/',
    },
  },
})
