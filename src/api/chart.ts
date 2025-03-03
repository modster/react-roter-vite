const CHART = new URLPattern({
  pathname: "/s/:symbolId/i/:intervalId/e/:exchangeId",
});

export default function handler(req: Request): Response {
  const match = CHART.exec(req.url);
  const symbolId = match?.pathname.groups.symbolId;
  const intervalId = match?.pathname.groups.intervalId;
  const exchangeId = match?.pathname.groups.exchangeId;
  if (symbolId || intervalId || exchangeId) {
    console.log("Symbol:", symbolId);
    console.log("Interval:", intervalId);
    console.log("Exchange:", exchangeId);
    return new Response(
      `Symbol: ${symbolId}, Interval: ${intervalId}, Exchange: ${exchangeId}`,
    );
  }
  return new Response("Not found", {
    status: 404,
  });
}

// Run with `deno run --allow-net src/api/chart.ts`
Deno.serve(handler);
