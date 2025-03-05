import { type ChartProps } from "../+types/chart.ts";
import { useParams } from "react-router";
import Loading from "../components/Loading.tsx";
import "../styles.css";
const Chart = () => {
  const { symbol, interval, exchange } = useParams<ChartProps>();

  return (
    <div className="chart">
      <ul className="text-sm">
        <li>Symbol: {symbol}</li>
        <li>Interval: {interval}</li>
        <li>Exchange: {exchange}</li>
      </ul>
      <button
        type="button"
        onClick={() => console.log({ symbol, interval, exchange })}
      >
        Log Loader Data
      </button>
      {/* Placeholder for chart visualization component */}
      <div id="chart-container">
        <Loading />
      </div>
    </div>
  );
};

export default Chart;
