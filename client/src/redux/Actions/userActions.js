// userActions.js
import axios from "axios";

// action types
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE";

// action creators
export const userLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

export const userLoginSuccess = (user) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: user,
  };
};

export const userLoginFailure = (error) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: error,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const userRegisterRequest = () => {
  return {
    type: USER_REGISTER_REQUEST,
  };
};

export const userRegisterSuccess = (user) => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: user,
  };
};

export const userRegisterFailure = (error) => {
  return {
    type: USER_REGISTER_FAILURE,
    payload: error,
  };
};

// async actions
export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(userLoginRequest());
    try {
      const response = await axios.post("https://bluecart-marketplace-backend.onrender.com/login", { email, password });
      const data = response.data;
      dispatch(userLoginSuccess(data));
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      dispatch(userLoginFailure(error.message));
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(userLogout());
    localStorage.removeItem("user");
  };
};

export const registerUser = (name, email, password) => {
  return async (dispatch) => {
    dispatch(userRegisterRequest());
    try {
      const response = await axios.post("https://bluecart-marketplace-backend.onrender.com/register", { name, email, password });
      const data = response.data;
      dispatch(userRegisterSuccess(data));
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      dispatch(userRegisterFailure(error.message));
    }
  };
};