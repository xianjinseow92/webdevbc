import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.scss';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>React Meetups</h1>
      <nav>
        <ul>
            <li>
                {/* These link components allow us to switch components on the website without reloading the whole webpage */}
                <Link to="/">All Meetups</Link>
            </li>
            <li>
                {/* These link components allow us to switch components on the website without reloading the whole webpage */}
                <Link to="/new-meetup">Add New Meetups</Link>
            </li>
            <li>
                {/* These link components allow us to switch components on the website without reloading the whole webpage */}
                <Link to="/favorites">My Favorites</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
