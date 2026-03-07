import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Optimasi rollup output
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
    // Split CSS per chunk untuk loading lebih optimal
    cssCodeSplit: true,
    // Minify untuk ukuran lebih kecil
    minify: "esbuild",
    // Target browser modern (React 19 requires modern browsers)
    target: "es2020",
    // Tidak expose source code di production
    sourcemap: false,
    // Chunk size warning threshold
    chunkSizeWarningLimit: 1000,
  },
});
