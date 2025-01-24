import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/v1': {
      target: 'https://v0-new-project-lumps00hldq.vercel.app/',
      changeOrigin: true,
      secure: false,
    },
  },
})
