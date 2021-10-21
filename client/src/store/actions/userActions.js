import {
  USER_GET,
  CHECK_AUTH,
  USER_LOADING,
  USER_ERROR
} from "./types";

export const getUser = (user) => {
  return {
    type: USER_GET,
    user,
  };
};
export const loadingUser = () => {
  return {
    type: USER_LOADING,
  };
};
export const errorUser = (errorMsg) => {
  return {
    type: USER_ERROR,
    errorMsg,
  };
};
export const setAuth = (isAuthorized) => {
  return {
    type: CHECK_AUTH,
    isAuthorized,
  };
};
