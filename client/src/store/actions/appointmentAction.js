import {
  APPOINTMENT_GET,
  APPOINTMENTS_DAILY_GET,
  APPOINTMENTS_MONTHLY_GET,
  APPOINTMENT_LOADING,
  APPOINTMENT_ERROR,
} from "./types";

export const getAppointment = (appointment) => {
  return {
    type: APPOINTMENT_GET,
    appointment,
  };
};
export const getappointmentsFindPerDay = (appointments) => {
  return {
    type: APPOINTMENTS_DAILY_GET,
    appointments,
  };
};
export const getappointmentsFindPerMonth = (appointments) => {
  return {
    type: APPOINTMENTS_MONTHLY_GET,
    appointments,
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
