import React from 'react';
import {Link, NavLink} from "react-router-dom";
import classes from './MainNavigation.module.css';


const getLinkClassName = ({isActive}) => isActive ? classes.active : undefined;
const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to='/'
              className={getLinkClassName}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/products'
              className={getLinkClassName}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;