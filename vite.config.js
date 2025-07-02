import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@splinetool/react-spline', 'framer-motion']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          spline: ['@splinetool/react-spline'],
          framer: ['framer-motion'],
          icons: ['react-icons/fa', 'react-icons/si']
        }
      }
    }
  },
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'credentialless',
      'Cross-Origin-Opener-Policy': 'same-origin'
    }
  }
})
