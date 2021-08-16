import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>Concert Calendar</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Concerts</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
