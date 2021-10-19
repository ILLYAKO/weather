import {
  USER_GET,
  CHECK_AUTH,
  USER_LOGOUT,
  USER_LOADING,
  USER_ERROR,
} from "../actions/types";

const initialState = {
  user: {},
  isAuthorized: false,
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING: {
      return {
        ...state,
        user: {},
        isAuthorized: false,
        isLoading: true,
        error: null,
      };
    }
    case USER_GET: {
      return {
        ...state,
        user: action.user,
        isAuthorized: true,
        isLoading: false,
        error: null,
      };
    }
    case USER_ERROR: {
      return {
        ...state,
        user: {},
        isAuthorized: false,
        isLoading: false,
        error: action.errorMsg,
      };
    }

    case USER_LOGOUT: {
      return {
        ...state,
        user: {},
        isAuthorized: false,
        isLoading: false,
        error: null,
      };
    }
    case CHECK_AUTH: {
      return { ...state, isAuthorized: action.isAuthorized, error: null };
    }
    default:
      return state;
  }
};
