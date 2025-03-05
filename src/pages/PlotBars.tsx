import * as Plot from "@observablehq/plot";
import { useEffect, useRef } from "react";
import { Svg } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const letters = [
  { letter: "A", frequency: 0.1 },
  { letter: "B", frequency: 0.2 },
  { letter: "C", frequency: 0.3 },
  { letter: "D", frequency: 0.4 },
  { letter: "E", frequency: 0.5 },
  { letter: "F", frequency: 0.6 },
  { letter: "G", frequency: 0.7 },
  { letter: "H", frequency: 0.8 },
  { letter: "I", frequency: 0.9 },
  { letter: "J", frequency: 1.0 },
  { letter: "K", frequency: 0.9 },
  { letter: "L", frequency: 0.8 },
  { letter: "M", frequency: 0.7 },
  { letter: "N", frequency: 0.6 },
  { letter: "O", frequency: 0.5 },
  { letter: "P", frequency: 0.4 },
  { letter: "Q", frequency: 0.3 },
  { letter: "R", frequency: 0.2 },
  { letter: "S", frequency: 0.1 },
  { letter: "T", frequency: 0.0 },
  { letter: "U", frequency: 0.1 },
  { letter: "V", frequency: 0.2 },
  { letter: "W", frequency: 0.3 },
  { letter: "X", frequency: 0.4 },
  { letter: "Y", frequency: 0.5 },
  { letter: "Z", frequency: 0.6 },
];

const plotChart = Plot.plot({
  title: "Letter Frequency",
  y: { percent: true },
  marks: [
    Plot.barY(letters, {
      x: "letter",
      y: "frequency",
      fill: "steelblue",
      sort: { x: "y" },
    }),
    Plot.ruleY([0]),
  ],
});
export default function PlotBars() {
  /**
   * Create a reference to the div element
   * where the chart will be rendered
   */
  const chartRef = useRef<HTMLDivElement>(null);
  const chartElement = plotChart;

  useEffect(() => {
    if (chartRef.current) {
      // chartRef.current.style.width
      // chartRef.current.style.height
      chartRef.current.innerHTML = "";
      chartRef.current.appendChild(chartElement);
    }
  }, []);

  return <div className="flex mx-auto" ref={chartRef}></div>;
}
