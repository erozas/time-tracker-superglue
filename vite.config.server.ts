import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import path from "path"

export default defineConfig({
  resolve: {
    alias: {
      "@views": path.resolve(__dirname, "app/views"),
      "@javascript": path.resolve(__dirname, "app/javascript"),
      "@components": path.resolve(__dirname, "app/frontend/components"),
      "@assets": path.resolve(__dirname, "app/frontend/assets"),
    },
  },
  plugins: [
    nodePolyfills({
      globals: {
        Buffer: false,
        global: false,
        process: false
      }
    }),
  ],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  esbuild: {
    loader: 'jsx',
    include: /\.(js|jsx)$/
  },
  assetsInclude: ['**/*.svg'],
  build: {
    lib: {
      entry: path.resolve(__dirname, "app/frontend/server_rendering.jsx"),
      formats: ['iife'],
      name: 'ServerRendering',
      fileName: () => 'server_rendering.js'
    },
    outDir: "public/build",
    sourcemap: true,
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
})