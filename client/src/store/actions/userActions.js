import { GET_USER } from "./types";
// const SET_FETCHING_STATUS = "SET_FETCHING_STATUS";

export const getUser = (user) => {
  return {
    type: GET_USER,
    user,
  };
};
