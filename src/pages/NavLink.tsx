import { NavLink } from "react-router-dom";
import routeList from "../main.tsx";

function AppNav() {
  return (
    <menu className="flex flex-grow justify-left">
      {routeList.map((route, i) => (
        <li className="mr-4" key={i}>
          <NavLink
            to={route.path}
            end
            className={({ isActive }) => isActive ? "text-bold" : ""}
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </menu>
  );
}

export default AppNav;
