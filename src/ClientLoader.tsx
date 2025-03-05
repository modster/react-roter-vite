import { Route } from "./+types/route.ts";
import { getChartData } from "./chart.ts";

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  // let data = await fetch(`/api/chart/exchange/${params.exchange}/symbol/:symbol/interval/:interval/${params.id}`);
  let data = await fetch(
    `/api/chart/?exchange=${params.exchange}&symbol=${params.symbol}&interval=${params.interval}`,
  );
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
  const jsonData = await data.json();

  return jsonData;
}

export async function clientAction({
  request,
}: Route.ClientActionArgs) {
  let formData = await request.formData();
  const chartData = await getChartData(formData);
  return chartData;
}
