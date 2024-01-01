import {Outlet, useLoaderData, useSubmit} from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import {useEffect} from "react";
import {getAuthToken, getTokenDuration} from "../util/auth";

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRE') {
      submit(null, {action: '/logout', method: 'post'});
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(`-> tokenDuration`, tokenDuration);

    setTimeout(() => {
      submit(null, {action: '/logout', method: 'post'});
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;