import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";

// biome-ignore lint: Template file
createRoot(document.getElementById("root")!).render(<App />);
