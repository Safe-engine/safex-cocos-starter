import { defineConfig } from "vite";
import { sdlTsxTransform } from './vite-plugin-sdl-tsx';

export default defineConfig({
  root: 'web',
  publicDir: "../res",
  resolve: {
    alias: {
      box2d: "/box2d.ts",
      sdl3: "/sdl3.ts",
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    target: "es2020",
  },
  optimizeDeps: {
    exclude: ['@safe-engine/sdl'],
  },
  server: { port: 8098 },
  plugins: [sdlTsxTransform()],
});
