import classes from './EventsNavigation.module.css';
import {NavLink} from 'react-router-dom';

const getClassName = ({isActive}) => isActive ? classes.active : undefined;
const EventsNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" className={getClassName}>All Events</NavLink>
          </li>
          <li>
            <NavLink to="/events/new" className={getClassName}>New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
