import $api from "./http";
import { setUser, setAuth } from "../actions/userActions";

export const register = (credentials) => async (dispatch) => {
  try {
    const { data } = await $api.post("/user/register", credentials);
    localStorage.setItem("token", data?.accessToken);
    await dispatch(setAuth(true));
    dispatch(setUser(data?.user));
  } catch (error) {
    console.error(error);
    dispatch(setUser({ error: error.response.data.error || "Server Error" }));
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    const { data } = await $api.post("/user/login", credentials);
    //?
    localStorage.setItem("token", data.accessToken);
    //?
    await dispatch(setAuth(true));
    await dispatch(setUser(data.user));
  } catch (error) {
    console.error(error);
    dispatch(setUser({ error: error.response.data.error || "Server Error" }));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await $api.post("/user/logout");
    localStorage.removeItem("token");
    await dispatch(setUser({}));
    await dispatch(setAuth(false));
  } catch (e) {
    console.log("Server error: ", e.response?.data?.messge);
  }
};

export const checkAuth = () => async (dispatch) => {
  // ? this.setLoading(true);
  try {
    const { data } = await $api.get("/user/refresh");
    await localStorage.setItem("token", data.accessToken);
    await dispatch(setUser(data.user));
    await dispatch(setAuth(true));
  } catch (e) {
    console.log("Server error: ", e.response?.data?.messge);
  }
};
