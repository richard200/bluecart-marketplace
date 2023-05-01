// Define the action types
export const FETCH_HISTORY_REQUEST = "FETCH_HISTORY_REQUEST";
export const FETCH_HISTORY_SUCCESS = "FETCH_HISTORY_SUCCESS";
export const FETCH_HISTORY_FAILURE = "FETCH_HISTORY_FAILURE";

// Define the action creator for fetching history request
export const fetchHistoryRequest = () => ({
  type: FETCH_HISTORY_REQUEST,
});

// Define the action creator for fetching history success
export const fetchHistorySuccess = (history) => ({
  type: FETCH_HISTORY_SUCCESS,
  payload: history,
});

// Define the action creator for fetching history failure
export const fetchHistoryFailure = (error) => ({
  type: FETCH_HISTORY_FAILURE,
  payload: error,
});
// action types
export const ADD_TO_HISTORY = "ADD_TO_HISTORY";
export const REMOVE_FROM_HISTORY = "REMOVE_FROM_HISTORY";
export const CLEAR_HISTORY = "CLEAR_HISTORY";

// action creators
export const addToHistory = (product) => {
  return {
    type: ADD_TO_HISTORY,
    payload: product,
  };
};

export const removeFromHistory = (id) => {
  return {
    type: REMOVE_FROM_HISTORY,
    payload: id,
  };
};

export const clearHistory = () => {
  return {
    type: CLEAR_HISTORY,
  };
};