import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "./r3fiber.tsx";
import { App } from "./app.tsx";
import R3Fiber from "./r3fiber.tsx";
import AComponent from "./a-component.tsx";
import { Layout } from "./Layout.tsx";
import "./styles.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />} />
      <Route path="/" element={<App content={{ Layout }} />} />
      <Route path="/box" element={<Box />} />
      <Route path="/r3fiber" element={<R3Fiber />} />
      <Route path="/a-component" element={<AComponent />} />
    </Routes>
  </BrowserRouter>,
);
