import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "./pages/ssr/r3fiber.tsx";
import { App } from "./pages/ssr/app.tsx";
import R3Fiber from "./pages/ssr/r3fiber.tsx";
import AComponent from "./pages/ssr/a-component.tsx";
import CanvasLayout from "./pages/ssr/CanvasLayout.tsx";
import StaticLayout from "./pages/ssr/StaticLayout.tsx";
import StaticComponent from "./pages/ssr/static-component.tsx";
import Layout from "./pages/ssr/Layout.tsx";
import NewRoute from "./pages/ssr/new-route.tsx"; // Added new route example
import "./styles.css";

interface RouteList {
  layout?: string;
  path?: string;
  name: string;
}

interface RouteLayouts {
  name: string;
}

export const routesList: RouteList[] = [
  { layout: "Layout", path: "/", name: "Home" },
  { layout: "Layout", path: "/r3fiber", name: "R3Fiber" },
  { layout: "Layout", path: "/a-component", name: "A Component" },
  { layout: "CanvasLayout", path: "/new-path", name: "New Route" },
  { layout: "CanvasLayout", path: "/box", name: "Box" },
  { layout: "StaticLayout", path: "/static", name: "Static" },
];
export const routeLayouts: RouteLayouts[] = [
  { name: "Layout" },
  { name: "CanvasLayout" },
  { name: "StaticLayout" },
];

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      {routeLayouts.map((layout, i) => {
        return (
          <Route key={i} element={React.createElement(layout.name)}>
            {routesList.map((item, k) => {
              if (item.layout === layout.name) {
                return (
                  <Route
                    key={k}
                    path={item.path}
                    element={React.createElement(item.name)}
                  />
                );
              }
              return null;
            })}
          </Route>
        );
      })}
    </Routes>
  </BrowserRouter>,
);
