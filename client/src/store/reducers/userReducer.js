import { GET_USER } from "../actions/types";

const initialState = {
  user: {},
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { user: action.user };
    default:
      return state;
  }
};
