import { Outlet } from "react-router";
import AppNav from "../pages/NavLink.tsx";

const Layout = () => {
  return (
    <div className="size-full">
      <AppNav />
      <Outlet />
    </div>
  );
};
export default Layout;
