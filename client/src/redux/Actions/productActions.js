import axios from 'axios';
// Define the action types
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";

// Define the action creator for fetching products request
export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

// Define the action creator for fetching products success
export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

// Define the action creator for fetching products failure
export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

// Define the action creator for filtering products
export const filterProducts = (products, filters) => ({
  type: FILTER_PRODUCTS,
  payload: {
    products,
    filters,
  },
});
// action types
export const FETCH_PRODUCT_DETAILS_REQUEST = "FETCH_PRODUCT_DETAILS_REQUEST";
export const FETCH_PRODUCT_DETAILS_SUCCESS = "FETCH_PRODUCT_DETAILS_SUCCESS";
export const FETCH_PRODUCT_DETAILS_FAILURE = "FETCH_PRODUCT_DETAILS_FAILURE";

// action creators
export const fetchProductDetailsRequest = () => {
  return {
    type: FETCH_PRODUCT_DETAILS_REQUEST,
  };
};

export const fetchProductDetailsSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_DETAILS_SUCCESS,
    payload: product,
  };
};

export const fetchProductDetailsFailure = (error) => {
  return {
    type: FETCH_PRODUCT_DETAILS_FAILURE,
    payload: error,
  };
};

// async action
export const fetchProductDetails = (id) => {
  return async (dispatch) => {
    dispatch(fetchProductDetailsRequest());
    try {
      const response = await axios.get(`http://localhost:3000/scrape/${id}`);
      const data = response.data;
      dispatch(fetchProductDetailsSuccess(data));
    } catch (error) {
      dispatch(fetchProductDetailsFailure(error.message));
      console.log(error);
    }
  };
};