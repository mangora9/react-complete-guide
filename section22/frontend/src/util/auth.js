import {redirect} from "react-router-dom";

const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  return expirationDate.getTime() - now.getTime();
}

const getAuthToken = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return null; // undefined가 반환될 경우 loader가 정상 독작을 하지 않을 수도 있음!
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }
  return token;
}

const tokenLoader = () => {
  return getAuthToken();
}

const checkAuthLoader = () => {
  // 이 함수는 다음 강의에서 추가될 것입니다.
  // 최종적으로 이런 모습이 되도록 하십시오.
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }

  return null; // 이 부분은 다음 강의 비디오에 빠져 있고, 여러분이 추가하셔야 합니다.
}

export {
  getTokenDuration,
  getAuthToken,
  tokenLoader,
  checkAuthLoader,
}