import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink className={makeLinkClass} to="/">
        Home
      </NavLink>

      <NavLink className={makeLinkClass} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
}
