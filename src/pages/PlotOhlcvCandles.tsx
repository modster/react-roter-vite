import * as Plot from "@observablehq/plot";
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { ChartProps } from "../+types/chart.ts";

/**
 * Generate random OHLCV data
 * @param x
 * @returns {OHLCVData[]} - An array of OHLCVData
 *
 * @todo Implement a generator function to generate random data
 */
interface OHLCVData {
  title?: string | Node | null | undefined;
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

// const parseDate = d3.timeParse("%Y-%m-%d");

const aapl = [];
export function Generator(x: number): OHLCVData[] {
  let timeDate = Date.now();
  const init = Array(x).fill(null).map(() => ({
    date: new Date(timeDate -= 60000),
    open: Math.floor(Math.random() * 100),
    high: Math.floor(Math.random() * 100),
    low: Math.floor(Math.random() * 100),
    close: Math.floor(Math.random() * 100),
    volume: Math.floor(Math.random() * 100),
    title: "Random Data",
  }));

  init.forEach((d) => {
    aapl.push({
      date: d.date,
      open: d.open,
      high: d.high,
      low: d.low,
      close: d.close,
      volume: d.volume,
      title: d.title,
    });
  });

  return init;
}
// const randomData = new Array(x).fill(null).map((rand, indx) => ({
//   date: new Date(rand.date),
//   open: Math.random() * 100,
//   high: Math.random() * 100,
//   low: Math.random() * 100,
//   close: Math.random() * 100,
//   volume: Math.random() * 100,
// }));

// const ohlcvData: OHLCVData[] = response.map((d) => ({
//   date: new Date(d[0]),
//   open: +d[1],
//   high: +d[2],
//   low: +d[3],
//   close: +d[4],
//   volume: +d[5],
// }));
const bsUrl = "https://api.binance.com/api/v3/";
const symbl = "BTCUSDT";
const inter = "1m";
const limit = "30";
const kline = "klines";
const exNfo = "exchangeInfo";
const klineUrl =
  `${bsUrl}${kline}?symbol=${symbl}&interval=${inter}&limit=${limit}`;
const PlotOhlcvCandles = () => {
  const [data, setData] = useState<OHLCVData[]>([]);
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(klineUrl);
        const rawData = await response.json();

        const parsedData = rawData.map((d: any[]) => {
          const [t, o, h, l, c, v] = d;
          return {
            date: new Date(t as number),
            open: +o,
            high: +h,
            low: +l,
            close: +c,
            volume: +v,
            title: "BTCUSDT 1m Binance",
          };
        });
        console.log("Data loaded from Binance.");
        setData(parsedData);
      } catch (error) {
        console.error("Error loading data:", error);
        console.log("Data loaded from Generator.");
        setData(Generator(30));
      }
    };

    const interv = setInterval(fetchData, 59000);
    return () => clearInterval(interv);
  }, []);

  useEffect(() => {
    // const data = Generator(30);
    const chart = Plot.plot({
      title: data[0]?.title,
      inset: 10,
      width: 928,
      grid: true,
      color: { domain: [-1, 0, 1], range: ["#e41a1c", "#000000", "#4daf4a"] },
      marks: [
        Plot.ruleX(data, {
          x: "date",
          y1: "low",
          y2: "high",
        }),
        Plot.ruleX(data, {
          x: "date",
          y1: "open",
          y2: "close",
          stroke: (d) => Math.sign(d.close - d.open),
          strokeWidth: 4,
          strokeLinecap: "square",
        }),
      ],
    });
    svgRef.current?.appendChild(chart);
    return () => {
      svgRef.current?.removeChild(chart);
    };
  }, [data]);

  return (
    <div
      className="stroke-slate-300 text-slate-300 bg-slate-800 justify-center align-middle stroke-1"
      ref={svgRef}
    >
    </div>
  );
};

export default PlotOhlcvCandles;
