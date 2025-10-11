import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 1337,
    strictPort: true,
  },
  plugins: [
    react(),
  ],
  preview: {
    port: 1337,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    target: ["safari13", "chrome120", "firefox120"],
    sourcemap: true,
    rollupOptions: {
      output: {
        entryFileNames: `[name]-[hash]-hello.js`,
        chunkFileNames: `[name]-[hash]-hello.js`,
      },
    },
  },
});
