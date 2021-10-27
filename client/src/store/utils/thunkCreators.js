import $api from "./http";
import { DateTime } from "luxon";

import {
  loadingUser,
  getUser,
  errorUser,
  setAuth,
} from "../actions/userActions";
import {
  getAppointment,
  getAppointmentsPerMonth,
  loadingAppointment,
  // errorAppointment,
} from "../actions/appointmentAction";

export const register = (credentials) => async (dispatch) => {
  try {
    dispatch(loadingUser());
    const { data } = await $api.post("/user/register", credentials);
    localStorage.setItem("token", data?.accessToken);

    // setTimeout(() => {
    dispatch(getUser(data?.user));
    // }, 500);
  } catch (err) {
    console.error(err);
    dispatch(errorUser({ error: err?.response.data.error || "Server Error" }));
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loadingUser());
    const { data } = await $api.post("/user/login", credentials);
    localStorage.setItem("token", data.accessToken);
    // setTimeout(() => {
    //   console.log("Timeout");
    dispatch(setAuth(true));
    dispatch(getUser(data?.user));
    // }, 3000);
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

export const appointmentCreate = (credentials) => async (dispatch) => {
  try {
    dispatch(loadingAppointment());

    const { day, time, ...other } = credentials;
    const appointTime = DateTime.fromJSDate(new Date(day + " " + time))
      .toUTC()
      .toString();
    const credentialsData = { ...other, appointTime };
    const { data } = await $api.post("/appointment/create", credentialsData);
    // setTimeout(() => {
    dispatch(getAppointment(data));
    // }, 500);
  } catch (err) {
    console.error(err);
    dispatch(errorUser({ error: err?.response.data.error || "Server Error" }));
  }
};

export const appointmentsPerMonth = (dayX) => async (dispatch) => {
  try {
    dispatch(loadingAppointment());
    const { data } = await $api.get(
      `/appointment/${dayX.setLocale("en-ca").toLocaleString()}`
    );
    dispatch(getAppointmentsPerMonth(data));
  } catch (err) {
    console.error(err);
    dispatch(errorUser({ error: err?.response.data.error || "Server Error" }));
  }
};
