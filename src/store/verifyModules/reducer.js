import * as actionTypes from "./actions";

const initialState = {
  success: false,
  category: ""
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

    case actionTypes.UPLOAD_DOCUMENT_IMAGE_FOR_VERIFICATION_ERROR:
      return {
        ...state,
        success: action.payload.code === 100,
        category: action.payload.category
      };

    default:
      return state;
  }
};

export default verify;
