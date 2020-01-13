import * as actionTypes from "./actions";

const initialState = {
  success: false
};

const verify = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VERIFY_VOLUNTEER_IMAGE:
      return {
        ...state,
        success: true
      };

    case actionTypes.VERIFY_SIGNUP:
      return {
        ...state,
        success: true
      };

    default:
      return state;
  }
};

export default verify;
