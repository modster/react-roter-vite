import { NavLink } from "react-router-dom";
import routeList from "../main.tsx";

function AppNav() {
  return (
    <div className="flex flex-row bg-slate-700 justify-between">
      <menu className="flex flex-row justify-between gap-1">
        {routeList.map((route, i) => (
          <li key={i}>
            <NavLink
              to={route.path}
              end
              className={({ isActive }) =>
                isActive ? "text-bold text-white" : "text-slate-400"}
            >
              {route.name} &nbsp;
            </NavLink>
          </li>
        ))}
      </menu>
      <menu className="flex flex-row justify-between gap-1 p-1">
        <li className="justify-end">
          <input
            type="text"
            placeholder=" Search"
            className="bg-slate-600 text-slate-300 m-px rounded gap-1"
            aria-label="Search"
            onChange={(e) => console.log(e.target.value)}
          />
        </li>
      </menu>
    </div>
  );
}

export default AppNav;
