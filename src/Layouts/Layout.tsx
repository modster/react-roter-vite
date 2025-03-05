import { Outlet } from "react-router";
import AppNav from "../components/NavLink.tsx";

const Layout = () => {
  return (
    <div className="h-9/10 p-0 mx-auto stroke-slate-300 text-slate-300 bg-slate-700">
      <AppNav />
      <Outlet />
    </div>
  );
};
export default Layout;
