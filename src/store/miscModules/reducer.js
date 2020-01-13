import * as Actions from "./actions";

const initialState = {
  success: null,
  requestStatus: {},
  states: [],
  lga: [],
  categories: [],
  orgTypes: []
};

const misc = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_STATES_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload.status,
      };
    case Actions.FETCH_STATES_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        states: action.payload.data
      };
    case Actions.FETCH_LGA_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload.status,
      };
    case Actions.FETCH_LGA_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        lga: action.payload.data
      };
    case Actions.FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload.status,
      };
    case Actions.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        categories: action.payload.data
      };
    case Actions.FETCH_ORG_TYPES_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload.status,
      };
    case Actions.FETCH_ORG_TYPES_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        orgTypes: action.payload.data
      };
    default:
      return state;
  }
};

export default misc;
