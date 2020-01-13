import * as Actions from "./actions";

const initialState = {
  success: null,
  requestStatus: {},
  emailVerificationSuccess: null,
  data: {},
  environment: ''//dotenv.process.env 
};

const auth = (state = initialState, action) => {
  console.log(state.environment, 'Action Log: ', action, state);
  switch (action.type) {
    case Actions.SIGNIN_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };
    case Actions.SIGNIN_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload
      };
    case Actions.SIGNUP_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };
    case Actions.SIGNUP_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload
      };
    case Actions.SIGNUP_ORG_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };
    case Actions.SIGNUP_ORG_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload
      };
    case Actions.SET_USER_DATA:
      return {
        ...state,
        data: action.payload
      };
    case Actions.SIGNOUT_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };
    case Actions.SIGNOUT_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload
      };
    case Actions.VERIFY_EMAIL_ERROR:
      return {
        ...state,
        emailVerificationSuccess: false,
        requestStatus: action.payload
      };
    case Actions.VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        emailVerificationSuccess: true,
        requestStatus: action.payload
      };
    default:
      return state;
  }
};

export default auth;
