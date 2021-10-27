import {
  APPOINTMENT_GET,
  APPOINTMENTS_DAILY_GET,
  APPOINTMENTS_MONTHLY_GET,
  APPOINTMENT_LOADING,
  APPOINTMENT_ERROR,
} from "../actions/types";

const initialState = {
  appointment: {},
  isLoading: false,
  error: null,
  appointments: [],
};

export const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPOINTMENT_LOADING:
      return {
        ...state,
        appointment: {},
        appointments: [],
        isLoading: true,
        error: null,
      };
    case APPOINTMENT_GET:
      return {
        ...state,
        appointment: action.appointment,
        appointments: [],
        isLoading: false,
        error: null,
      };
    case APPOINTMENTS_DAILY_GET:
      return {
        ...state,
        appointment: {},
        appointments: action.appointments,
        isLoading: false,
        error: null,
      };
    case APPOINTMENTS_MONTHLY_GET:
      return {
        ...state,
        appointment: {},
        appointments: action.appointments,
        isLoading: false,
        error: null,
      };

    case APPOINTMENT_ERROR:
      return {
        ...state,
        appointment: {},
        isLoading: false,
        error: action.errorMsg,
      };
    default:
      return state;
  }
};
