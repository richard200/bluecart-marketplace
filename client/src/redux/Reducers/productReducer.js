import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCT_DETAILS_REQUEST,
    FETCH_PRODUCT_DETAILS_SUCCESS,
    FETCH_PRODUCT_DETAILS_FAILURE,
  } from "../Actions/productActions";
  
  const initialState = {
    loading: false,
    products: [],
    error: "",
    product: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
          error: "",
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          products: [],
          error: action.payload,
        };
      case FETCH_PRODUCT_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PRODUCT_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          product: action.payload,
          error: "",
        };
      case FETCH_PRODUCT_DETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          product: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;