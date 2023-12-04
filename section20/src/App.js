import {Fragment, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {uiActions} from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import {fetchCartData, sendCartData} from "./store/cart-actions";

let isInitial = true;
const App = () => {
  const dispatch = useDispatch();
  const isVisibleCart = useSelector((state) => state.ui.isVisibleCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    console.log(`-> cart`, cart);
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch])
  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(uiActions.showNotification({
  //       status: 'pending',
  //       title: 'Sending...',
  //       message: 'Sending cart data!',
  //     }));
  //     const response = await fetch('https://react-http-95098-default-rtdb.firebaseio.com/cart.json', {
  //       method: 'PUT',
  //       body: JSON.stringify(cart),
  //     });
  //
  //     if (!response.ok) {
  //       throw new Error('에러!');
  //     }
  //
  //     const responseData = await response.json();
  //
  //
  //     dispatch(uiActions.showNotification({
  //       status: 'success',
  //       title: 'Success!',
  //       message: 'Sending cart data successfully!',
  //     }));
  //   }
  //
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }
  //
  //   sendCartData().catch((error) => {
  //     dispatch(uiActions.showNotification({
  //       status: 'error',
  //       title: 'Error!',
  //       message: 'Sending cart data failed!',
  //     }));
  //   });
  // }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />)}
      <Layout>
        {isVisibleCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
