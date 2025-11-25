import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANTE: cambiá "mi-ecommerce-app" si tu repositorio en GitHub tiene otro nombre
export default defineConfig({
  plugins: [react()],
  base: '/mi-ecommerce-app/',
})
