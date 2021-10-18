import { SET_USER, CHECK_AUTH } from "./types";

// const SET_FETCHING_STATUS = "SET_FETCHING_STATUS";

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};
export const setAuth = (isAuthorized) => {
  return {
    type: CHECK_AUTH,
    isAuthorized,
  };
};
