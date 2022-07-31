import { ThemeProvider } from "styled-components/native";
import Home from "./src/pages/home";
import primary from "./src/themes/primary";

export default function App() {
  return (
    <ThemeProvider theme={primary}>
      <Home />
    </ThemeProvider>
  );
}

