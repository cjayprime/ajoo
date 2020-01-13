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

export const SET_USER_DATA = "SET_USER_DATA";

export const signinUser = data => ({
  type: SIGNIN,
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
