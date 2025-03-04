import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { uid } from "/home/greeffer/react-router-vite/node_modules/@observablehq/stdlib/src/dom/uid.js";

// Sample data array
export const data: Data[] = [
  { date: new Date("2023-01-01"), temperature: 32 },
  { date: new Date("2023-01-02"), temperature: 35 },
  { date: new Date("2023-01-03"), temperature: 37 },
  { date: new Date("2023-01-04"), temperature: 34 },
  { date: new Date("2023-01-05"), temperature: 31 },
  { date: new Date("2023-01-06"), temperature: 32 },
  { date: new Date("2023-01-07"), temperature: 35 },
  { date: new Date("2023-01-08"), temperature: 37 },
  { date: new Date("2023-01-09"), temperature: 34 },
  { date: new Date("2023-01-10"), temperature: 31 },
  { date: new Date("2023-01-11"), temperature: 32 },
  { date: new Date("2023-01-12"), temperature: 35 },
  { date: new Date("2023-01-13"), temperature: 37 },
  { date: new Date("2023-01-14"), temperature: 34 },
  { date: new Date("2023-01-15"), temperature: 31 },
  { date: new Date("2023-01-16"), temperature: 32 },
  { date: new Date("2023-01-17"), temperature: 35 },
  { date: new Date("2023-01-18"), temperature: 37 },
  { date: new Date("2023-01-19"), temperature: 34 },
  { date: new Date("2023-01-20"), temperature: 31 },
  { date: new Date("2023-01-21"), temperature: 32 },
  { date: new Date("2023-01-22"), temperature: 35 },
  { date: new Date("2023-01-23"), temperature: 37 },
  { date: new Date("2023-01-24"), temperature: 34 },
  { date: new Date("2023-01-25"), temperature: 31 },
  { date: new Date("2023-01-26"), temperature: 32 },
  { date: new Date("2023-01-27"), temperature: 35 },
  { date: new Date("2023-01-28"), temperature: 37 },
  { date: new Date("2023-01-29"), temperature: 34 },
  { date: new Date("2023-01-30"), temperature: 31 },
  { date: new Date("2023-01-31"), temperature: 32 },
  { date: new Date("2023-02-01"), temperature: 35 },
  { date: new Date("2023-02-02"), temperature: 37 },
  { date: new Date("2023-02-03"), temperature: 34 },
  { date: new Date("2023-02-04"), temperature: 31 },
  { date: new Date("2023-02-05"), temperature: 32 },
  { date: new Date("2023-02-06"), temperature: 35 },
  { date: new Date("2023-02-07"), temperature: 37 },
  { date: new Date("2023-02-08"), temperature: 34 },
  { date: new Date("2023-02-09"), temperature: 31 },
  { date: new Date("2023-02-10"), temperature: 32 },
  { date: new Date("2023-02-11"), temperature: 35 },
  { date: new Date("2023-02-12"), temperature: 37 },
  { date: new Date("2023-02-13"), temperature: 34 },
  { date: new Date("2023-02-14"), temperature: 31 },
  { date: new Date("2023-02-15"), temperature: 32 },
];
export type Data = {
  date: Date;
  temperature: number;
};
export interface D3Dimensions {
  width: number;
  height: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
}
export const dimensions: D3Dimensions = {
  width: 928,
  height: 500,
  marginTop: 20,
  marginRight: 30,
  marginBottom: 30,
  marginLeft: 40,
};

// Create the scales.
const x = d3.scaleUtc()
  .domain(d3.extent(data, (d: Data) => d.date))
  .range([dimensions.marginLeft, dimensions.width - dimensions.marginRight]);

const y = d3.scaleLinear()
  .domain(d3.extent(data, (d: Data) => d.temperature)).nice()
  .range([dimensions.height - dimensions.marginBottom, dimensions.marginTop]);

const color = d3.scaleSequential(y.domain(), d3.interpolateTurbo);

// Create the path generator.
const line = d3.line()
  .curve(d3.curveStep)
  .defined((d: { temperature: number }) => !isNaN(d.temperature))
  .x((d: { date: Date }) => x(d.date))
  .y((d: { temperature: number }) => y(d.temperature));

// Create the SVG container.
const svg = d3.create("svg")
  .attr("width", dimensions.width)
  .attr("height", dimensions.height)
  .attr("viewBox", [0, 0, dimensions.width, dimensions.height])
  .attr("style", "max-width: 100%; height: auto;");

svg.append("g")
  .attr(
    "transform",
    `translate(0,${dimensions.height - dimensions.marginBottom})`,
  )
  .call(d3.axisBottom(x).ticks(dimensions.width / 80).tickSizeOuter(0));

svg.append("g")
  .attr("transform", `translate(${dimensions.marginLeft},0)`)
  .call(d3.axisLeft(y))
  .call((g) => g.select(".domain").remove())
  .call((g) => g.select(".tick:last-of-type text").append("tspan").text("°F"));

// Append the color gradient.
const gradient = uid("gradient");
svg.append("linearGradient")
  .attr("id", gradient.id)
  .attr("gradientUnits", "userSpaceOnUse")
  .attr("x1", 0)
  .attr("y1", dimensions.height - dimensions.marginBottom)
  .attr("x2", 0)
  .attr("y2", dimensions.marginTop)
  .selectAll("stop")
  .data(d3.ticks(0, 1, 10))
  .join("stop")
  .attr("offset", (d: number) => d)
  .attr("stop-color", color.interpolator());

// Append the line.
svg.append("path")
  .datum(data)
  .attr("fill", "none")
  .attr("stroke", gradient)
  .attr("stroke-width", 1.5)
  .attr("stroke-linejoin", "round")
  .attr("stroke-linecap", "round")
  .attr("d", line);

svg.append("text")
  .attr("x", dimensions.width / 2)
  .attr("y", dimensions.marginTop)
  .attr("text-anchor", "middle")
  .text("Temperature Over Time");

// Create a functional component to render the chart
const LinearColor = () => {
  const svgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.appendChild(svg.node()!);
    }
  }, []);
  return <div className="stroke-slate-300 stroke-1" ref={svgRef}></div>;
};

export default LinearColor;
