import React, {useEffect, useState} from "react";

const STORAGE_KEY = {
  login: 'isLoggedIn',
}
const LOGIN_STATUS = {
  login: '1',
  logout: '0',
}

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => ({}),
  onLogin: (email, password) => ({}),
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem(STORAGE_KEY.login);
    if (storedUserLoggedInInfo === LOGIN_STATUS.login) {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem(STORAGE_KEY.login);
    setIsLoggedIn(false);
  }
  const loginHandler = () => {
    localStorage.setItem(STORAGE_KEY.login, LOGIN_STATUS.login);
    setIsLoggedIn(true);
  }
  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler,
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;