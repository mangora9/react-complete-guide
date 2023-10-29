import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
  const { logo, title } = props;
  return (
    <header className={classes.header}>
      {!!(logo) && <img src={logo} alt={title ?? 'Logo'} />}
      {!!(title) && <h1>{title}</h1>}
    </header>
  );
};

export default Header;