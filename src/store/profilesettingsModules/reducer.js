import * as Actions from "./actions";

const initialState = {
  success: null,
  requestStatus: {},
  data: {}
};

const setting = (state = initialState, action) => {
  switch (action.type) {
    case Actions.INDIVIDUAL_SETTING_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Actions.INDIVIDUAL_SETTING_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload
      };

    case Actions.INDIVIDUAL_EMAIL_SETTING_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Actions.INDIVIDUAL_EMAIL_SETTING_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload
      };

    case Actions.INDIVIDUAL_PASSWORD_SETTING_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Actions.INDIVIDUAL_PASSWORD_SETTING_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload
      };

    case Actions.UPDATE_USER_DATA:
      return {
        ...state,
        data: action.payload
      };

    case Actions.ORGANISATION_SETTING_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Actions.ORGANISATION_SETTING_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload
      };

    case Actions.ORGANISATION_EMAIL_SETTING_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Actions.ORGANISATION_EMAIL_SETTING_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload
      };

    case Actions.ORGANISATION_PASSWORD_SETTING_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Actions.ORGANISATION_PASSWORD_SETTING_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload
      };

    // case Actions.USER_PROFILE_IMAGE_ERROR:
    //   return {
    //     ...state,
    //     success: false,
    //     requestStatus: action.payload
    //   };

    // case Actions.USER_PROFILE_IMAGE_SUCCESS:
    //   return {
    //     ...state,
    //     success: true,
    //     requestStatus: action.payload
    //   };

    default:
      return state;
  }
};

export default setting;
