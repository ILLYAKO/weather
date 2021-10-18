import { SET_USER, CHECK_AUTH, USER_LOGOUT } from "../actions/types";

const initialState = {
  user: {},
  isAuthorized: false,
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: action.user };
    }
    case USER_LOGOUT: {
      return { ...state, isAuthorized: action.isAuthorized, user: action.user };
    }
    case CHECK_AUTH: {
      return { ...state, isAuthorized: action.isAuthorized };
    }
    default:
      return state;
  }
};
