import * as Plot from "@observablehq/plot";
import { type Data } from "./LinearColor.tsx";
import { useEffect, useState } from "react";

const useAAPLData = () => {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/d3-fetch@3.0.2/test/data/aapl-ohlcv.json",
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return data;
};

const PlotOhlcvCandles = () => {
  const data = useAAPLData();

  return Plot.plot({
    inset: 6,
    width: 928,
    grid: true,
    y: { label: "↑ Apple stock price ($)" },
    color: { domain: [-1, 0, 1], range: ["#e41a1c", "#000000", "#4daf4a"] },
    marks: [
      Plot.ruleX(data, {
        x: "Date",
        y1: "Low",
        y2: "High",
      }),
      Plot.ruleX(data, {
        x: "Date",
        y1: "Open",
        y2: "Close",
        stroke: (d) => Math.sign(d.Close - d.Open),
        strokeWidth: 4,
        strokeLinecap: "round",
      }),
    ],
  });
};

export default PlotOhlcvCandles;
