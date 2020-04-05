import * as Actions from "./actions";

const initialState = {
  success: null,
  requestStatus: {},
  emailVerificationSuccess: null,
  data: {},
  environment: '',//dotenv.process.env 
  facebookLogin: {},
  facebookSignup: {},
  facebookSignupDetails: {},
  facebookOrgSignup: {}
};

const auth = (state = initialState, action) => {
  //console.log(state.environment, 'Action Log: ', action, state);
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
    case Actions.FACEBOOK_LOGIN_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      }
    case Actions.FACEBOOK_LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        facebookLogin: action.payload.data
      }
    case Actions.FACEBOOK_SIGNUP_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      }
    case Actions.FACEBOOK_SIGNUP_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        facebookSignup: action.payload.data
      }
    case Actions.FETCH_FACEBOOK_DETAILS_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      }
    case Actions.FETCH_FACEBOOK_DETAILS_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        facebookSignupDetails: action.payload.data
      }
    case Actions.FACEBOOK_ORG_SIGNUP_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      }
    case Actions.FACEBOOK_ORG_SIGNUP_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        facebookOrgSignup: action.payload.data
      }
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
    case Actions.FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        emailVerificationSuccess: false,
        requestStatus: action.payload
      };
    case Actions.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        emailVerificationSuccess: true,
        requestStatus: action.payload
      };
    case Actions.RESET_PASSWORD_ERROR:
      return {
        ...state,
        requestStatus: action.payload
      };
    case Actions.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        requestStatus: action.payload
      };
    default:
      return state;
  }
};

export default auth;
