import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/' : '/MalaNav/', //生产环境为根目录,开发环境为/MalaNav/

  build: {
    outDir: 'dist',
  },
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
  },
})
