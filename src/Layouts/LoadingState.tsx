import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";

export function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export default function LoadingState() {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
}
