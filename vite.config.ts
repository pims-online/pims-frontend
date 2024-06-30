import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const URL_CDN = "https://pims-frontend.vercel.app/";
const URL_LOCALHOST = "http://localhost:4173/";
const buildLocal = true;
const URL = buildLocal ? URL_LOCALHOST : URL_CDN;

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        widget: "./src/widget.tsx",
      },
      output: {
        entryFileNames: (assetInfo) => {
          return assetInfo.name === "widget"
            ? "assets/js/[name].js"
            : "assets/[name].js";
        },
      },
    },
  },
  experimental: {
    renderBuiltUrl(filename: string) {
      return URL + filename;
    },
  },
});

// TUTO
