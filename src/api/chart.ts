const CHART = new URLPattern({
  pathname: "/:symbol/:interval/:exchange",
});

export default function handler(req: Request): Response {
  const match = CHART.exec(req.url);
  const symbol = match?.pathname.groups.symbol;
  const interval = match?.pathname.groups.interval;
  const exchange = match?.pathname.groups.exchange;
  if (symbol || interval || exchange) {
    console.log("Symbol:", symbol);
    console.log("Interval:", interval);
    console.log("Exchange:", exchange);
    return new Response(
      JSON.stringify(
        {
          symbol,
          interval,
          exchange,
        },
        null,
        2,
      ),
      {
        headers: {
          "content-type": "application/json",
        },
      },
    );
  }
  return new Response("Not found", {
    status: 404,
  });
}

// Run with `deno run --allow-net src/api/chart.ts`
// Deno.serve(handler);
