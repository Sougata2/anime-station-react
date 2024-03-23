import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="recent-anime">Recent Anime</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
