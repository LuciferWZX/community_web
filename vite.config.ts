import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@atoms": path.resolve(__dirname, "src/atoms"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
