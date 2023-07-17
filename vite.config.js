import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://status-code-js.github.io/marketing-website",
  plugins: [react()],
})
