import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import path from "path"
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  resolve: {
    alias: {
      "@views": path.resolve(__dirname, "app/views"),
      "@javascript": path.resolve(__dirname, "app/javascript"),
    },
  },
  plugins: [
    RubyPlugin(),
    tailwindcss(),
  ],
})
