import { userActionTypes } from "../actionTypes/userActionTypes";

export const userLoggedIn = (user) => ({
  type: userActionTypes.USER_SIGN_IN,
  user: { username: user.username, isLoggedIn: true },
});

export const userLoggedOUT = () => ({
  type: userActionTypes.USER_SIGN_OUT,
  user: { username: "", isLoggedIn: false },
});
