export const INDIVIDUAL_SETTING = "INDIVIDUAL_SETTING";
export const INDIVIDUAL_SETTING_ERROR = "INDIVIDUAL_SETTING_ERROR";
export const INDIVIDUAL_SETTING_SUCCESS = "INDIVIDUAL_SETTING_SUCCESS";

export const INDIVIDUAL_EMAIL_SETTING = "INDIVIDUAL_EMAIL_SETTING";
export const INDIVIDUAL_EMAIL_SETTING_ERROR = "INDIVIDUAL_EMAIL_SETTING_ERROR";
export const INDIVIDUAL_EMAIL_SETTING_SUCCESS =
  "INDIVIDUAL_EMAIL_SETTING_SUCCESS";

export const INDIVIDUAL_PASSWORD_SETTING = "INDIVIDUAL_PASSWORD_SETTING";
export const INDIVIDUAL_PASSWORD_SETTING_ERROR =
  "INDIVIDUAL_PASSWORD_SETTING_ERROR";
export const INDIVIDUAL_PASSWORD_SETTING_SUCCESS =
  "INDIVIDUAL_PASSWORD_SETTING_SUCCESS";

export const ORGANISATION_SETTING = "ORGANISATION_SETTING";
export const ORGANISATION_SETTING_ERROR = "ORGANISATION_SETTING_ERROR";
export const ORGANISATION_SETTING_SUCCESS = "ORGANISATION_SETTING_SUCCESS";

export const ORGANISATION_EMAIL_SETTING = "ORGANISATION_EMAIL_SETTING";
export const ORGANISATION_EMAIL_SETTING_ERROR =
  "ORGANISATION_EMAIL_SETTING_ERROR";
export const ORGANISATION_EMAIL_SETTING_SUCCESS =
  "ORGANISATION_EMAIL_SETTING_SUCCESS";

export const ORGANISATION_PASSWORD_SETTING = "ORGANISATION_PASSWORD_SETTING";
export const ORGANISATION_PASSWORD_SETTING_ERROR =
  "ORGANISATION_PASSWORD_SETTING_ERROR";
export const ORGANISATION_PASSWORD_SETTING_SUCCESS =
  "ORGANISATION_PASSWORD_SETTING_SUCCESS";

export const USER_PROFILE_IMAGE = "USER_PROFILE_IMAGE";
export const USER_PROFILE_IMAGE_ERROR = "USER_PROFILE_IMAGE_ERROR";
export const USER_PROFILE_IMAGE_SUCCESS = "USER_PROFILE_IMAGE_SUCCESS";

export const UPDATE_USER_DATA = "UPDATE_USER_DATA";

export const individualProfileSetting = data => {
  // console.log("individualProfileSetting individualProfileSetting individualProfileSetting ", data)
  return {
    type: INDIVIDUAL_SETTING,
    payload: data
  };
};

export const individualEmailSetting = data => ({
  type: INDIVIDUAL_EMAIL_SETTING,
  payload: data
});

export const individualProfilePasswordSetting = data => ({
  type: INDIVIDUAL_PASSWORD_SETTING,
  payload: data
});

export const organisationProfileSetting = data => ({
  type: ORGANISATION_SETTING,
  payload: data
});

export const organisationEmailSetting = data => ({
  type: ORGANISATION_EMAIL_SETTING,
  payload: data
});

export const organisationProfilePasswordSetting = data => ({
  type: ORGANISATION_PASSWORD_SETTING,
  payload: data
});

export const userProfileImage = data => ({
  type: USER_PROFILE_IMAGE
});

export const updateUserData = data => ({
  type: UPDATE_USER_DATA,
  payload: data
});
