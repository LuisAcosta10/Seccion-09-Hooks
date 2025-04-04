import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Abre el navegador automáticamente
    watch: {
      usePolling: true, // Asegura la detección de cambios en archivos
    },
    hmr: {
      protocol: 'ws', // Usa WebSockets para HMR
    },
  },
})
