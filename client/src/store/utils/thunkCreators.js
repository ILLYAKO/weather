import $api from "./http";
import {
  loadingUser,
  getUser,
  errorUser,
  setAuth,
} from "../actions/userActions";

export const register = (credentials) => async (dispatch) => {
  try {
    dispatch(loadingUser());
    const { data } = await $api.post("/user/register", credentials);
    localStorage.setItem("token", data?.accessToken);

    setTimeout(() => {
      // dispatch(setAuth(true));
      dispatch(getUser(data?.user));
    }, 500);

    // await dispatch(setAuth(true));
    // dispatch(getUser(data?.user));
  } catch (err) {
    console.error(err);
    dispatch(errorUser({ error: err?.response.data.error || "Server Error" }));
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loadingUser());
    const { data } = await $api.post("/user/login", credentials);
    //?
    localStorage.setItem("token", data.accessToken);
    //?
    setTimeout(() => {
      console.log("Timeout");
      dispatch(setAuth(true));
      dispatch(getUser(data?.user));
    }, 3000);
    // await dispatch(setAuth(true));
    // dispatch(getUser(data?.user));
  } catch (err) {
    console.error(err);
    dispatch(errorUser({ error: err?.response.data.error || "Server Error" }));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await $api.post("/user/logout");
    localStorage.removeItem("token");
    await dispatch(getUser({}));
    await dispatch(setAuth(false));
  } catch (err) {
    console.error(err);
    dispatch(errorUser({ error: err?.response.data.error || "Server Error" }));
  }
};

export const checkAuth = () => async (dispatch) => {
  // ? this.setLoading(true);
  try {
    const { data } = await $api.get("/user/refresh");
    await localStorage.setItem("token", data.accessToken);
    await dispatch(getUser(data.user));
    await dispatch(setAuth(true));
  } catch (err) {
    console.error(err);
    dispatch(errorUser({ error: err?.response.data.error || "Server Error" }));
  }
};
