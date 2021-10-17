import $api from "../../http";
import { getUser } from "../actions/userActions";

export const register = (credentials) => async (dispatch) => {
  try {
    const { data } = await $api.post("/user/register", credentials);
    localStorage.setItem("token", data.accessToken);
    dispatch(getUser(data.user));
    // socket.emit("go-online", data.id);
  } catch (error) {
    console.error(error);
    dispatch(getUser({ error: error.response.data.error || "Server Error" }));
  }
};
