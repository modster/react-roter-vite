import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "./pages/layout/r3fiber.tsx";
import { App } from "./pages/layout/app.tsx";
import R3Fiber from "./pages/layout/r3fiber.tsx";
import AComponent from "./pages/layout/a-component.tsx";
import { ChartComponent } from "./ChartComponent.tsx";
import SearchParams from "./SearchParams.tsx";
import CanvasLayout from "./Layouts/CanvasLayout.tsx";
import Chart from "./pages/PlotBars.tsx";
import StaticLayout from "./Layouts/StaticLayout.tsx";
import StaticComponent from "./pages/ssg/static-component.tsx";
import Layout from "./Layouts/Layout.tsx";
import NewRoute from "./pages/canvas/new-route.tsx"; // Added new route example
import "./styles.css";
export interface RouteList {
  layout?: string;
  path: string;
  name: string;
}

export const routeList: RouteList[] = [
  { path: "/", name: "Home" },
  { path: "r3fiber", name: "R3Fiber" },
  { path: "PlotBars", name: "Bars" },
  {
    path: "chart/s/:symbolId/i/:intervalId/e/:exchangeId",
    name: "ChartComponent",
  },
  { path: "SearchParams", name: "Search" },
  { path: "box", name: "Box" },
  { path: "static", name: "Static" },
];

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="r3fiber" element={<R3Fiber />} />
        <Route path="a-component" element={<AComponent />} />
        <Route path="SearchParams" element={<SearchParams />} />
        <Route path="PlotBars" element={<Chart />} />
        <Route
          path="chart/s/:symbolId/i/:intervalId/e/:exchangeId"
          element={<ChartComponent />}
        />
      </Route>
      <Route element={<CanvasLayout />}>
        <Route path="/new-route" element={<NewRoute />} />
        <Route path="/box" element={<Box />} />
        <Route path="/chart" element={<Chart />} />
      </Route>
      <Route element={<StaticLayout />}>
        <Route path="/static" element={<StaticComponent />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
export default routeList;
