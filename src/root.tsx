import LoadingScreen from "./components/loading-screen";

export async function loader() {
  return {
    version: await getVersion(),
  };
}

export function Layout() {
  return <html>{/*...*/}</html>;
}

export function HydrateFallback({ loaderData }): Route.ComponentProps {
  return (
    <div>
      <h1>Loading version: {loaderData.version}</h1>
    </div>
  );
}

export default function App() {
  return <Outlet />;
}
