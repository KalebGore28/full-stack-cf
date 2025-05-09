import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import relay from "vite-plugin-relay";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare(), tailwindcss(), relay],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
