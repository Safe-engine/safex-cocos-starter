import { defineConfig } from 'vite'
import { safexTransform } from 'vite-plugin-safex-transform'

export default defineConfig({
  define: {
    'process.env': {},
  },
  publicDir: 'res',
  server: { port: 8089 },
  plugins: [safexTransform()],
})
