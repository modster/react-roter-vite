import { NavLink } from "react-router";
export function AppNav() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/r3fiber">r3fiber</NavLink>
      <NavLink to="/AComponent">AComponent</NavLink>
    </nav>
  );
}
