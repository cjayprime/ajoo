export const SIGNIN = "SIGNIN";
export const SIGNIN_ERROR = "SIGNIN_ERROR";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";

export const SIGNUP = "SIGNUP";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

export const SIGNUP_ORG = "SIGNUP_ORG";
export const SIGNUP_ORG_ERROR = "SIGNUP_ORG_ERROR";
export const SIGNUP_ORG_SUCCESS = "SIGNUP_ORG_SUCCESS";

export const SIGNOUT = "SIGNOUT";
export const SIGNOUT_ERROR = "SIGNOUT_ERROR";
export const SIGNOUT_SUCCESS = "SIGNOUT_ACTION_SUCCESS";

export const UPLOAD_PROFILE_IMAGE = "UPLOAD_PROFILE_IMAGE";
export const UPLOAD_PROFILE_IMAGE_ERROR = "UPLOAD_PROFILE_IMAGE_ERROR";
export const UPLOAD_PROFILE_IMAGE_SUCCESS = "UPLOAD_PROFILE_IMAGE_SUCCESS";

export const VERIFY_EMAIL = "VERIFY_EMAIL";
export const VERIFY_EMAIL_ERROR = "VERIFY_EMAIL_ERROR";
export const VERIFY_EMAIL_SUCCESS = "VERIFY_EMAIL_SUCCESS";

export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";

export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";

export const SET_USER_DATA = "SET_USER_DATA";

export const FACEBOOK_LOGIN_SUCCESS = "FACEBOOK_LOGIN_SUCCESS";
export const FACEBOOK_LOGIN_ERROR = "FACEBOOK_LOGIN_ERROR";
export const FACEBOOK_LOGIN = "FACEBOOK_LOGIN";

export const FACEBOOK_SIGNUP_SUCCESS = "FACEBOOK_SIGNUP_SUCCESS";
export const FACEBOOK_SIGNUP_ERROR = "FACEBOOK_SIGNUP_ERROR";
export const FACEBOOK_SIGNUP = "FACEBOOK_SIGNUP";

export const FETCH_FACEBOOK_DETAILS = "FETCH_FACEBOOK_DETAILS";
export const FETCH_FACEBOOK_DETAILS_ERROR = "FETCH_FACEBOOK_DETAILS_ERROR";
export const FETCH_FACEBOOK_DETAILS_SUCCESS = "FETCH_FACEBOOK_DETAILS_SUCCESS";

export const FACEBOOK_ORG_SIGNUP_SUCCESS = "FACEBOOK_ORG_SIGNUP_SUCCESS";
export const FACEBOOK_ORG_SIGNUP_ERROR = "FACEBOOK_ORG_SIGNUP_ERROR";
export const FACEBOOK_ORG_SIGNUP = "FACEBOOK_ORG_SIGNUP";

export const signinUser = data => ({
  type: SIGNIN,
  payload: data
});

export const facebookLogin = data => ({
  type: FACEBOOK_LOGIN,
  payload: data
});

export const facebookSignup = data => ({
  type: FACEBOOK_SIGNUP,
  payload: data
});

export const getFacebookSignupDetails = data => ({
  type: FETCH_FACEBOOK_DETAILS,
  payload: data
})

export const facebookOrgSignup = data => ({
  type: FACEBOOK_ORG_SIGNUP,
  payload: data
});

export const signupUser = data => ({
  type: SIGNUP,
  payload: data
});

export const signupOrg = data => ({
  type: SIGNUP_ORG,
  payload: data
});

export const signoutAction = data => ({
  type: SIGNOUT,
  payload: data
});

export const uploadProfileImage = data => ({
  type: UPLOAD_PROFILE_IMAGE,
  payload: data
});

export const setUserData = data => ({
  type: SET_USER_DATA,
  payload: data
});

export const verifyEmail = data => ({
  type: VERIFY_EMAIL,
  payload: data
});

export const forgotPassword = data => ({
  type: FORGOT_PASSWORD,
  payload: data
});

export const resetPassword = data => ({
  type: RESET_PASSWORD,
  payload: data
});
