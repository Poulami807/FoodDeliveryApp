import axios from "axios";

// Redux Types
import { SIGN_IN, SIGN_OUT, SIGN_UP, GOOGLE_AUTH } from "./auth.type";

// redux actions
import { getMySelf, clearUser } from "../User/user.action";

export const signIn = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: "/auth/signin",
      data: { credentials: userData },
    });

    window.location.href = "/delivery";

    localStorage.setItem(
      "yummelyUser",
      JSON.stringify({ token: User.data.token })
    );

    return dispatch({ type: SIGN_IN, payload: User.data });
  } catch (error) {
    alert(error.response.data.error)
    dispatch({ type: "ERROR", payload: error });
  }
};

export const signUp = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: "/auth/signup",
      data: { credentials: userData },
    });

    window.location.href = "/delivery";

    localStorage.setItem(
      "yummelyUser",
      JSON.stringify({ token: User.data.token })
    );

    return dispatch({ type: SIGN_UP, payload: User.data });
  } catch (error) {
    alert(error.response.data.error)
    dispatch({ type: "ERROR", payload: error });
  }
};

export const googleAuth = (token) => async (dispatch) => {
  try {
    localStorage.setItem("yummelyUser", JSON.stringify({ token }));

    dispatch({ type: GOOGLE_AUTH, payload: {} });
    window.location.href = "/delivery";
    
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    localStorage.removeItem("yummelyUser");
    clearUser();
    window.location.href = "/delivery";

    return dispatch({ type: SIGN_OUT, payload: {} });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};