import * as Plot from "@observablehq/plot";
import { useEffect, useRef } from "react";
import * as htl from "htl";
import * as d3 from "d3";
import type { Data } from "./LinearColor.tsx";

const data: Data[] = [
  { date: new Date("2023-01-01"), temperature: 32 },
  { date: new Date("2023-01-02"), temperature: 22 },
  { date: new Date("2023-01-03"), temperature: 37 },
  { date: new Date("2023-01-04"), temperature: 44 },
  { date: new Date("2023-01-05"), temperature: 31 },
  { date: new Date("2023-01-06"), temperature: 56 },
  { date: new Date("2023-01-07"), temperature: 35 },
  { date: new Date("2023-01-08"), temperature: 37 },
  { date: new Date("2023-01-09"), temperature: 34 },
  { date: new Date("2023-01-10"), temperature: 67 },
  { date: new Date("2023-01-11"), temperature: 22 },
  { date: new Date("2023-01-12"), temperature: 35 },
  { date: new Date("2023-01-13"), temperature: 55 },
  { date: new Date("2023-01-14"), temperature: 34 },
  { date: new Date("2023-01-15"), temperature: 11 },
  { date: new Date("2023-01-16"), temperature: 32 },
  { date: new Date("2023-01-17"), temperature: 35 },
  { date: new Date("2023-01-18"), temperature: 37 },
  { date: new Date("2023-01-19"), temperature: 34 },
  { date: new Date("2023-01-20"), temperature: 31 },
  { date: new Date("2023-01-21"), temperature: 32 },
  { date: new Date("2023-01-22"), temperature: 11 },
  { date: new Date("2023-01-23"), temperature: 37 },
  { date: new Date("2023-01-24"), temperature: 34 },
  { date: new Date("2023-01-25"), temperature: 31 },
  { date: new Date("2023-01-26"), temperature: 32 },
  { date: new Date("2023-01-27"), temperature: 35 },
  { date: new Date("2023-01-28"), temperature: 37 },
  { date: new Date("2023-01-29"), temperature: 34 },
  { date: new Date("2023-01-30"), temperature: 23 },
  { date: new Date("2023-01-31"), temperature: 0 },
  { date: new Date("2023-02-01"), temperature: 35 },
  { date: new Date("2023-02-02"), temperature: 37 },
  { date: new Date("2023-02-03"), temperature: 88 },
  { date: new Date("2023-02-04"), temperature: 31 },
  { date: new Date("2023-02-05"), temperature: 45 },
  { date: new Date("2023-02-06"), temperature: 67 },
  { date: new Date("2023-02-07"), temperature: 75 },
  { date: new Date("2023-02-08"), temperature: 55 },
  { date: new Date("2023-02-09"), temperature: 66 },
  { date: new Date("2023-02-10"), temperature: 32 },
  { date: new Date("2023-02-11"), temperature: 88 },
  { date: new Date("2023-02-12"), temperature: 37 },
  { date: new Date("2023-02-13"), temperature: 34 },
  { date: new Date("2023-02-14"), temperature: 100 },
  { date: new Date("2023-02-15"), temperature: 32 },
];

/**
 * Same as LinearColor but using Observablehq's Plot
 */
export const LinearColorPlot = () => {
  const svgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const chart = Plot.plot({
      y: { nice: true },
      color: {
        domain: [32, 75],
        scheme: "turbo",
        legend: true,
        ticks: 7,
        label: "temperature (°F)",
      },
      marks: [
        Plot.line(data, {
          x: "date",
          y: "temperature",
          stroke: "url(#gradient)",
          curve: "step-before",
        }),

        (_index, { y, color }) =>
          htl.svg`<defs>
       <linearGradient id="gradient" gradientUnits="userSpaceOnUse"
         x1=0 x2=0 y1=${y!(45)} y2=${y!(75)}>${
            d3.ticks(0, 1, 10).map(
              (t: number) =>
                htl.svg`<stop
                      offset=${t * 100}%
                      stop-color=${color!(45 * (1 - t) + 75 * t)} />`,
            )
          }`,
      ],
    });

    svgRef.current?.appendChild(chart);

    return () => {
      svgRef.current?.removeChild(chart);
    };
  }, []);

  return <div className="stroke-slate-300 stroke-1" ref={svgRef}></div>;
};

export default LinearColorPlot;
