// import type { LoaderFunctionArgs } from "react-router-dom";
// import { ChartProps } from "./+types/chart.ts";
// import { useParams } from "react-router";
// import { JSX } from "react/jsx-runtime";
import * as d3 from "d3";
import { useState } from "react";
import "./styles.css";
import LinePlot from "./pages/layout/LinePlot.tsx";
// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return <div>Loading...</div>;
}

export function ChartComponent() {
  const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

  function onMouseMove(event: React.MouseEvent) {
    const [x, y] = d3.pointer(event);
    setData(data.slice(-200).concat(Math.atan2(x, y)));
  }

  return (
    <div onMouseMove={onMouseMove}>
      <LinePlot data={data} />
    </div>
  );
}
