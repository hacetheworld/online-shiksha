import { userActionTypes } from "../actionTypes/userActionTypes";

const INTIAL_STATE = {
  user: {
    username: "",
    isLoggedIn: "",
  },
};

const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.USER_SIGN_IN:
      return {
        ...state,
        user: {
          username: action.user.username,
          isLoggedIn: action.user.isLoggedIn,
        },
      };
    case userActionTypes.USER_SIGN_OUT:
      return {
        ...state,
        user: {
          username: action.user.username,
          isLoggedIn: action.user.isLoggedIn,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
