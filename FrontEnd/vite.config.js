import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'reward-earth.bungus.fyi' // Add your domain here
    ],
    host: true, // Optional: Allow external access
    port: 5173 // Optional: Define the port (or use the default)
  },
})
