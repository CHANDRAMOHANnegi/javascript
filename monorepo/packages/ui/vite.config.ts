import { defineConfig } from 'vite'
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    conditions: ["browser"]
  },
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "@mono/ui",
      fileName: (format) => `index.${format}.js`,
    }
  }
})
