import React, {useContext, useEffect, useState} from 'react';
import classes from './HeaderCartButton.module.css'
import CartIcon from "../../Cart/CartIcon/CartIcon";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const numberOfCartItems = cartCtx.items.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);
  const btnClasses = `${classes.button} ${isHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setIsHighlighted(true);
    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [cartCtx.items]);

  return (
    <button
      className={btnClasses}
      onClick={props.onClick}
    >
      <span><CartIcon/></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;