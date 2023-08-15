import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "node:path";
import process from "node:process";

export default defineConfig({
  plugins: [react()],
  server: {
    open: "index.html",
  },
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist"
  },
  resolve: {
    alias: { "/src": path.resolve(process.cwd(), "src") }
  },
});