import store from "../Store/Store";
import { getUser } from "../Store/userSlice";

function validateLogin(data, name, password) {
  const authenticatedUser = Object.values(data.dataBase).find(
    (user) => user.userInfo.name === name && user.userInfo.password === password
  );

  if (authenticatedUser) {
    store.dispatch(getUser(authenticatedUser));
    return true;
  } else {
    return false;
  }
}

export default validateLogin;
