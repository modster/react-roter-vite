import { NavLink } from "react-router-dom";
import routeList from "../main.tsx";

function AppNav() {
  return (
    <div className="bg-slate-700">
      <menu className="m-auto flex flex-row">
        {routeList.map((route, i) => (
          <li className="m-auto text-slate" key={i}>
            <NavLink
              to={route.path}
              end
              className={({ isActive }) =>
                isActive ? "text-bold text-white" : "text-slate-400"}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
        <li>
          <input
            type="text"
            placeholder="Search"
            className="bg-slate-700 text-white p-2 align-right rounded gap-1"
          />
        </li>
      </menu>
    </div>
  );
}

export default AppNav;
