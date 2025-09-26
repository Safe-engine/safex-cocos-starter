import { defineConfig } from 'vite'
import { safexTransform } from 'vite-plugin-safex-transform'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  define: {
    'process.env': {},
  },
  publicDir: 'res',
  // build: {
  //   minify: false,
  //   copyPublicDir: false,
  // },
  server: { port: 8089 },
  plugins: [
    safexTransform(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/cocos-html5-ts/lib/cocos2d-3.17.js',
          dest: 'vendor',
        },
      ],
    }),
  ],
})
