import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    outDir: 'build',
    rollupOptions: {
      external: ['test/**', '**/*.stories.*'],
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://codelang.vercel.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
