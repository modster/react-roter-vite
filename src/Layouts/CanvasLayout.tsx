import { Outlet } from "react-router";
import { Canvas } from "@react-three/fiber";
import AppNav from "../pages/NavLink.tsx";

export const Layout = () => {
  return (
    <div className="size-full">
      <AppNav /> {/* Add the navigation component here */}
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight
          position={[-10, -10, -10]}
          decay={0}
          intensity={Math.PI}
        />
        <Outlet />
      </Canvas>
    </div>
  );
};
export default Layout;
