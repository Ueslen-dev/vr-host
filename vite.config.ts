import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main",
      // filename: "remoteEntry.js",
      remotes: {
        header: "http://localhost:5174/assets/remoteEntry.js",
        card: "http://localhost:5175/assets/remoteEntry.js",
        footer: "http://localhost:5176/assets/remoteEntry.js",
      },
      shared: [
        "react",
        "react-dom",
        "@chakra-ui/react",
        "@emotion/react",
        "@emotion/styled",
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
