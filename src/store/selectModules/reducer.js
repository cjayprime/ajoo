import { ORGANISATION_CATEGORY } from "./actions";

const initialState = {
  category: []
};

const select = (state = initialState, action) => {
  switch (action.type) {
    case ORGANISATION_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    default:
      return state;
  }
};

export default select;
