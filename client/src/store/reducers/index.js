import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { appointmentReducer } from "./appointmentReducer";


export default combineReducers({
  userReducer,
  appointmentReducer,
});
