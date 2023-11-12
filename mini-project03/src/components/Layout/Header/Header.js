import { Fragment } from 'react';
import mealsImage from '../../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton
          onClick={props.onShowCart}
        />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='한상 가득 차려진 음식 사진!!'/>
      </div>
    </Fragment>
  );
};

export default Header;