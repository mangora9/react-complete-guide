import classes from './MainNavigation.module.css';
import {Link, NavLink} from "react-router-dom";

const getClassName = ({isActive}) => isActive ? classes.active : undefined;

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='/' className={getClassName} end>Home</NavLink>
          </li>
          <li>
            <NavLink to='/events' className={getClassName}>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
