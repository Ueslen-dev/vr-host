import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import App from "./App.tsx";

import "./index.css";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#02D72F",
      200: "#00AA13",
      300: "rgba(0, 170, 20, 0.455)",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
