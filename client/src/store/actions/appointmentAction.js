import {
  APPOINTMENT_GET,
  APPOINTMENT_LOADING,
  APPOINTMENT_ERROR,
} from "./types";

export const getAppointment = (appointment) => {
  return {
    type: APPOINTMENT_GET,
    appointment,
  };
};
export const loadingAppointment = () => {
  return {
    type: APPOINTMENT_LOADING,
  };
};
export const errorAppointment = (errorMsg) => {
  return {
    type: APPOINTMENT_ERROR,
    errorMsg,
  };
};
