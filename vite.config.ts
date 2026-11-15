import { defineConfig, type Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from 'vite-plugin-vue-devtools'
import viteCompression from "vite-plugin-compression";
import path from "path";
import fs from "fs";

const githubPagesSpaFallback = (): Plugin => {
  let outDir = "dist";
  return {
    name: "github-pages-spa-fallback",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      fs.copyFileSync(
        path.join(outDir, "index.html"),
        path.join(outDir, "404.html"),
      );
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    viteCompression({
      algorithm: "brotliCompress",
    }),
    githubPagesSpaFallback(),
  ],
  base: "/lancer-briefings-cmlimm/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    include: [
      "lancer-data",
      "lancer-ktb-data",
      "lancer-nrfaw-data",
      "lancer-longrim-data"
    ],
  },
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    reportCompressedSize: true,
  },
  json: {
    namedExports: true,
  },
  css: {
    devSourcemap: true,
  },
});
