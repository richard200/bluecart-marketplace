import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
  } from "../Actions/userActions";
  
  const initialState = {
    loading: false,
    user: null,
    error: "",
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: "",
        };
      case USER_LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          user: null,
          error: action.payload,
        };
      case USER_LOGOUT:
        return {
          ...state,
          user: null,
        };
      case USER_REGISTER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case USER_REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: "",
        };
      case USER_REGISTER_FAILURE:
        return {
          ...state,
          loading: false,
          user: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;