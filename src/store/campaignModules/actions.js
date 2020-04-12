export const CAMPAIGN_IMAGE_UPLOAD = "CAMPAIGN_IMAGE_UPLOAD";

export const USER_CREATE_CAMPAIGN = "USER_CREATE_CAMPAIGN";
export const USER_CREATE_CAMPAIGN_ERROR = "USER_CREATE_CAMPAIGN_ERROR";
export const USER_CREATE_CAMPAIGN_SUCCESS = "USER_CREATE_CAMPAIGN_SUCCESS";

export const FETCH_ALL_CAMPAIGNS = "FETCH_ALL_CAMPAIGNS";
export const FETCH_ALL_CAMPAIGNS_ERROR = "FETCH_ALL_CAMPAIGNS_ERROR";
export const FETCH_ALL_CAMPAIGNS_SUCCESS = "FETCH_ALL_CAMPAIGNS_SUCCESS";

export const FETCH_SUCCESS_STORY = "FETCH_SUCCESS_STORY";
export const FETCH_SUCCESS_STORY_ERROR = "FETCH_SUCCESS_STORY_ERROR";
export const FETCH_SUCCESS_STORY_SUCCESS = "FETCH_SUCCESS_STORY_SUCCESS";

export const FETCH_ORGANIZATIONS = "FETCH_ORGANIZATIONS";
export const FETCH_ORGANIZATIONS_ERROR = "FETCH_ORGANIZATIONS_ERROR";
export const FETCH_ORGANIZATIONS_SUCCESS = "FETCH_ORGANIZATIONS_SUCCESS";

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

export const ADD_REWARD = "ADD_REWARD";
export const ADD_REWARD_ERROR = "ADD_REWARD_ERROR";
export const ADD_REWARD_SUCCESS = "ADD_REWARD_SUCCESS";

export const GET_REWARD = "GET_REWARD";
export const GET_REWARD_ERROR = "GET_REWARD_ERROR";
export const GET_REWARD_SUCCESS = "GET_REWARD_SUCCESS";

export const EDIT_REWARD = "EDIT_REWARD";
export const EDIT_REWARD_ERROR = "EDIT_REWARD_ERROR";
export const EDIT_REWARD_SUCCESS = "EDIT_REWARD_SUCCESS";

export const DELETE_REWARD = "DELETE_REWARD";
export const DELETE_REWARD_ERROR = "DELETE_REWARD_ERROR";
export const DELETE_REWARD_SUCCESS = "DELETE_REWARD_SUCCESS";

export const FETCH_ORGANIZATION_CAMPAIGNS = "FETCH_ORGANIZATION_CAMPAIGNS";
export const FETCH_ORGANIZATION_CAMPAIGNS_ERROR = "FETCH_ORGANIZATION_CAMPAIGNS_ERROR";
export const FETCH_ORGANIZATION_CAMPAIGNS_SUCCESS = "FETCH_ORGANIZATION_CAMPAIGNS_SUCCESS"

export const SET_CAMPAIGN_DATA = "SET_CAMPAIGN_DATA";

export const CLOSE_CAMPAIGN = "CLOSE_CAMPAIGN";
export const CLOSE_CAMPAIGN_ERROR = "CLOSE_CAMPAIGN_ERROR";
export const CLOSE_CAMPAIGN_SUCCESS = "CLOSE_CAMPAIGN_SUCCESS";

export const CLOSE_DONATION = "CLOSE_DONATION";
export const CLOSE_DONATION_ERROR = "CLOSE_DONATION_ERROR";
export const CLOSE_DONATION_SUCCESS = "CLOSE_DONATION_SUCCESS";

export const DELETE_CAMPAIGN = "DELETE_CAMPAIGN";
export const DELETE_CAMPAIGN_ERROR = "DELETE_CAMPAIGN_ERROR";
export const DELETE_CAMPAIGN_SUCCESS = "DELETE_CAMPAIGN_SUCCESS";

export const UPLOAD_CAMPAIGN_THANK_YOU_IMAGE = "UPLOAD_CAMPAIGN_THANK_YOU_IMAGE";
export const UPLOAD_CAMPAIGN_THANK_YOU_IMAGE_ERROR = "UPLOAD_CAMPAIGN_THANK_YOU_IMAGE_ERROR";
export const UPLOAD_CAMPAIGN_THANK_YOU_IMAGE_SUCCESS = "UPLOAD_CAMPAIGN_THANK_YOU_IMAGE_SUCCESS";

export const UPLOAD_VOLUNTEER_BILL_IMAGE = "UPLOAD_VOLUNTEER_BILL_IMAGE";

export const UPLOAD_VOLUNTEER_IDENTIFICATION_DOCUMENT = "UPLOAD_VOLUNTEER_IDENTIFICATION_DOCUMENT";

export const REPORT_CAMPAIGN = "REPORT_CAMPAIGN";
export const REPORT_CAMPAIGN_ERROR = "REPORT_CAMPAIGN_ERROR";
export const REPORT_CAMPAIGN_SUCCESS = "REPORT_CAMPAIGN_SUCCESS";

export const GET_VOLUNTEER_CAMPAIGN = "GET_VOLUNTEER_CAMPAIGN";
export const GET_VOLUNTEER_CAMPAIGN_ERROR = "GET_VOLUNTEER_CAMPAIGN_ERROR";
export const GET_VOLUNTEER_CAMPAIGN_SUCCESS = "GET_VOLUNTEER_CAMPAIGN_SUCCESS";

export const GET_CAMPAIGN_VOLUNTEER = "GET_CAMPAIGN_VOLUNTEER";
export const GET_CAMPAIGN_VOLUNTEER_ERROR = "GET_CAMPAIGN_VOLUNTEER_ERROR";
export const GET_CAMPAIGN_VOLUNTEER_SUCCESS = "GET_CAMPAIGN_VOLUNTEER_SUCCESS";

export const GET_TOTAL_DONATIONS = "GET_TOTAL_DONATIONS";
export const GET_TOTAL_DONATIONS_ERROR = "GET_TOTAL_DONATIONS_ERROR";
export const GET_TOTAL_DONATIONS_SUCCESS = "GET_TOTAL_DONATIONS_SUCCESS";

export const GET_TOTAL_CAMPAIGNS = "GET_TOTAL_CAMPAIGNS";
export const GET_TOTAL_CAMPAIGNS_ERROR = "GET_TOTAL_CAMPAIGNS_ERROR";
export const GET_TOTAL_CAMPAIGNS_SUCCESS = "GET_TOTAL_CAMPAIGNS_SUCCESS";

export const GET_TOTAL_CLOSED = "GET_TOTAL_CLOSED";
export const GET_TOTAL_CLOSED_ERROR = "GET_TOTAL_CLOSED_ERROR";
export const GET_TOTAL_CLOSED_SUCCESS = "GET_TOTAL_CLOSED_SUCCESS";

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

export const fetchCompletedCampaigns = data => {
  return {
    type: FETCH_SUCCESS_STORY,
    payload: data
  }
};

export const organizationsAction = data => {
  return {
    type: FETCH_ORGANIZATIONS,
    payload: data
  }
}

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

export const getReward = data => ({
  type: GET_REWARD,
  payload: data
});

export const addReward = data => ({
  type: ADD_REWARD,
  payload: data
});

export const editReward = data => ({
  type: EDIT_REWARD,
  payload: data
});

export const deleteReward = data => ({
  type: DELETE_REWARD,
  payload: data
});

export const organizationCampaignsAction = data => ({
  type: FETCH_ORGANIZATION_CAMPAIGNS,
  payload: data
})

export const closeCampaign = data => ({
  type: CLOSE_CAMPAIGN,
  payload: data
});

export const closeDonation = data => ({
  type: CLOSE_DONATION,
  payload: data
});

export const deleteCampaign = data => ({
  type: DELETE_CAMPAIGN,
  payload: data
});

export const uploadCampaignThankYouImage = data => ({
  type: UPLOAD_CAMPAIGN_THANK_YOU_IMAGE,
  payload: data
});

export const uploadVolunteerBill = data => ({
  type: UPLOAD_VOLUNTEER_BILL_IMAGE,
  payload: data
});

export const uploadVolunteerIdentificationDocument = data => ({
  type: UPLOAD_VOLUNTEER_IDENTIFICATION_DOCUMENT,
  payload: data
});

export const reportCampaign = data => ({
  type: REPORT_CAMPAIGN,
  payload: data
});

export const getCampaignsOfAVolunteer = data => ({
  type: GET_CAMPAIGN_VOLUNTEER,
  payload: data
});

export const getVolunteersOfACampaign = data => ({
  type: GET_VOLUNTEER_CAMPAIGN,
  payload: data
});

export const getTotalDonations = data => ({
  type: GET_TOTAL_DONATIONS,
  payload: data
});

export const getTotalCampaigns = data => ({
  type: GET_TOTAL_CAMPAIGNS,
  payload: data
});

export const getTotalClosed = data => ({
  type: GET_TOTAL_CLOSED,
  payload: data
})