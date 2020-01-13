export const CAMPAIGN_IMAGE_UPLOAD = "CAMPAIGN_IMAGE_UPLOAD";

export const USER_CREATE_CAMPAIGN = "USER_CREATE_CAMPAIGN";
export const USER_CREATE_CAMPAIGN_ERROR = "USER_CREATE_CAMPAIGN_ERROR";
export const USER_CREATE_CAMPAIGN_SUCCESS = "USER_CREATE_CAMPAIGN_SUCCESS";

export const FETCH_ALL_CAMPAIGNS = "FETCH_ALL_CAMPAIGNS";
export const FETCH_ALL_CAMPAIGNS_ERROR = "FETCH_ALL_CAMPAIGNS_ERROR";
export const FETCH_ALL_CAMPAIGNS_SUCCESS = "FETCH_ALL_CAMPAIGNS_SUCCESS";

export const FETCH_USER_CAMPAIGNS = "FETCH_USER_CAMPAIGNS";
export const FETCH_USER_CAMPAIGNS_ERROR = "FETCH_USER_CAMPAIGNS_ERROR";
export const FETCH_USER_CAMPAIGNS_SUCCESS = "FETCH_USER_CAMPAIGNS_SUCCESS";

export const UPLOAD_CAMPAIGN_IMAGE = "UPLOAD_CAMPAIGN_IMAGE";
export const UPLOAD_CAMPAIGN_IMAGE_ERROR = "UPLOAD_CAMPAIGN_IMAGE_ERROR";
export const UPLOAD_CAMPAIGN_IMAGE_SUCCESS = "UPLOAD_CAMPAIGN_IMAGE_SUCCESS";

export const FETCH_CAMPAIGN_BY_ID = "FETCH_CAMPAIGN_BY_ID";
export const FETCH_CAMPAIGN_BY_ID_ERROR = "FETCH_CAMPAIGN_BY_ID_ERROR";
export const FETCH_CAMPAIGN_BY_ID_SUCCESS = "FETCH_CAMPAIGN_BY_ID_SUCCESS";

export const INITIATE_DONATION = "INITIATE_DONATION";
export const INITIATE_DONATION_ERROR = "INITIATE_DONATION_ERROR";
export const INITIATE_DONATION_SUCCESS = "INITIATE_DONATION_SUCCESS";

export const VERIFY_PAYMENT = "VERIFY_PAYMENT";
export const VERIFY_PAYMENT_ERROR = "VERIFY_PAYMENT_ERROR";
export const VERIFY_PAYMENT_SUCCESS = "VERIFY_PAYMENT_SUCCESS";

export const EDIT_USER_CAMPAIGN = "EDIT_USER_CAMPAIGN";
export const EDIT_USER_CAMPAIGN_ERROR = "EDIT_USER_CAMPAIGN_ERROR";
export const EDIT_USER_CAMPAIGN_SUCCESS = "EDIT_USER_CAMPAIGN_SUCCESS";

export const GET_CAMPAIGN_DONATION = "GET_CAMPAIGN_DONATION";
export const GET_CAMPAIGN_DONATION_ERROR = "GET_CAMPAIGN_DONATION_ERROR";
export const GET_CAMPAIGN_DONATION_SUCCESS = "GET_CAMPAIGN_DONATION_SUCCESS";

export const GET_CAMPAIGN_DONATION_BY_ID = "GET_CAMPAIGN_DONATION_BY_ID";
export const GET_CAMPAIGN_DONATION_BY_ID_ERROR = "GET_CAMPAIGN_DONATION_BY_ID_ERROR";
export const GET_CAMPAIGN_DONATION_BY_ID_SUCCESS = "GET_CAMPAIGN_DONATION_BY_ID_SUCCESS";

export const SET_CAMPAIGN_DATA = "SET_CAMPAIGN_DATA";

export const userCreateCampaign = data => ({
  type: USER_CREATE_CAMPAIGN,
  payload: data
});

export const setCampaignData = data => ({
  type: SET_CAMPAIGN_DATA,
  payload: data
});

export const fetchAllCampaigns = data => ({
  type: FETCH_ALL_CAMPAIGNS,
  payload: data
});

export const fetchUserCampaigns = data => ({
  type: FETCH_USER_CAMPAIGNS,
  payload: data
});

export const uploadCampaignImage = data => ({
  type: UPLOAD_CAMPAIGN_IMAGE,
  payload: data
});

export const fetchCampaignById = data => ({
  type: FETCH_CAMPAIGN_BY_ID,
  payload: data
});

export const iniateDonationAction = data => ({
  type: INITIATE_DONATION,
  payload: data
});

export const verifyPaymentAction = data => ({
  type: VERIFY_PAYMENT,
  payload: data
});

export const userEditCampaign = data => ({
  type: EDIT_USER_CAMPAIGN,
  payload: data
});

export const getCampaignDonations = data => ({
  type: GET_CAMPAIGN_DONATION,
  payload: data
});

export const getCampaignDonationById = data => ({
  type: GET_CAMPAIGN_DONATION_BY_ID,
  payload: data
});
