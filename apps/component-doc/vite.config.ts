import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "ui",
        replacement: resolve(__dirname, "../../packages/ui/"),
      },
    ],
  },
});
