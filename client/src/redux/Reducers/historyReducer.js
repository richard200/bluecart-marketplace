import {
    ADD_TO_HISTORY,
    CLEAR_HISTORY,
    REMOVE_FROM_HISTORY,
  } from "../Actions/historyActions";
  
  const initialState = {
    items: [],
  };
  
  const historyReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_HISTORY:
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case REMOVE_FROM_HISTORY:
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
      case CLEAR_HISTORY:
        return {
          ...state,
          items: [],
        };
      default:
        return state;
    }
  };
  
  export default historyReducer;