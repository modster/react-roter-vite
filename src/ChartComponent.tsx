// import type { LoaderFunctionArgs } from "react-router-dom";
import { ChartProps } from "./+types/chart.ts";
import { useParams } from "react-router";
import { JSX } from "react/jsx-runtime";

// export async function clientLoader({
//   params,
// }: LoaderFunctionArgs): Promise<ChartProps> {
//   const res = await fetch(
//     `/api/chart/s/${params.symbolId}/i/${params.intervalId}/e/${params.exchangeId}`,
//   );
//   if (!res.ok) {
//     throw new Error("Network response was not ok");
//   }
//   const data = await res.json();
//   return data;
// }

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return <div>Loading...</div>;
}

export function ChartComponent(): JSX.Element {
  const { symbolId, intervalId, exchangeId } = useParams<ChartProps>();

  return (
    <div className="chart">
      <ul className="text-sm">
        <li>Symbol: {symbolId}</li>
        <li>Interval: {intervalId}</li>
        <li>Exchange: {exchangeId}</li>
      </ul>
      <button
        type="button"
        onClick={() => console.log({ symbolId, intervalId, exchangeId })}
      >
        Log Loader Data
      </button>
      {/* Placeholder for chart visualization component */}
      <div id="chart-container">Chart will be rendered here</div>
    </div>
  );
}

export default ChartComponent;
