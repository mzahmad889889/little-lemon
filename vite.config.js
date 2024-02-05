import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    globals: true,
    environment: 'happy-dom',
    setupFiles:'./setupTests.js'
}
  // server: {
  //   host: '127.0.0.2',
  //   port: 5071
  // }
})
