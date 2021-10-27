import {
  APPOINTMENT_GET,
  APPOINTMENT_MONTHLY_GET,
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
    case APPOINTMENT_MONTHLY_GET:
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
