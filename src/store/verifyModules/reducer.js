import * as actionTypes from "./actions";

const initialState = {
  success: false,
  volunteers: [],
  campaign: {},
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

    case actionTypes.GET_ALL_VOLUNTEERS_SUCCESS:
      return {
        ...state,
        success: true,
        volunteers: action.payload.entity
      };

    case actionTypes.GET_ALL_VOLUNTEERS_ERROR:
      return {
        ...state,
        success: false
      };

    case actionTypes.VERIFY_CAMPAIGN_SUCCESS:
      return {
        ...state,
        success: true,
        campaign: action.payload.entity
      };

    case actionTypes.VERIFY_CAMPAIGN_ERROR:
      return {
        ...state,
        success: false
      };
    
    default:
      return state;
  }
};

export default verify;
