import { NavLink } from "react-router-dom";
import routeList from "../main.tsx";
import "../styles.css";
function AppNav() {
  return (
    <div className="z-10 flex bg-slate-800 justify-between w-screen max-h-1/10 border-b border-slate-600 shadow-md shadow-slate-400/50">
      <menu className="z-20 flex justify-between text-sm m-0 p-0">
        {routeList.map((route, i) => (
          <li
            key={i}
            className="z-30 bg-slate-800"
          >
            <NavLink
              to={route.path}
              end
              className={({ isActive }) =>
                isActive
                  ? "text-bold text-white ml-1 pl-1 rounded transition duration-300 ease-in-out hover:bg-slate-500/50"
                  : "text-slate-400 m-0 ml-1 pl-1 hover:text-white rounded hover:bg-slate-500/50"}
            >
              {route.name} &nbsp;
            </NavLink>
          </li>
        ))}
      </menu>
      <menu className="flex flex-row justify-between text-sm pr-0 my-0 mr-0 py-0 rounded">
        <li className="flex justify-end text-sm p-0 m-0 gap-1 rounded">
          <input
            type="text"
            placeholder=" Search"
            className="bg-slate-700 w-25 text-xs text-white p-0 m-1 rounded gap-1 inset-shadow-sm inset-shadow-slate-500"
            aria-label="Search"
            onChange={(e) => console.log(e.target.value)}
          />
        </li>
      </menu>
    </div>
  );
}

export default AppNav;
