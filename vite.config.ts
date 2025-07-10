import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import path from "path"
import tailwindcss from "@tailwindcss/vite";

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
    RubyPlugin(),
    tailwindcss(),
  ],
  build: {
    outDir: "public/build",
    sourcemap: true,
  },
})