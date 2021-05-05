import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <h1>Meetup Navigation Bar</h1>
      <nav>
        <ul>
            <li>
                {/* These link components allow us to switch components on the website without reloading the whole webpage */}
                <Link to="/">All Meetups</Link>
            </li>
            <li>
                {/* These link components allow us to switch components on the website without reloading the whole webpage */}
                <Link to="/new-meetup">New Meetups</Link>
            </li>
            <li>
                {/* These link components allow us to switch components on the website without reloading the whole webpage */}
                <Link to="/favorites">Favorites</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
