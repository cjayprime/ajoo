import * as Action from "./actions";

const initialState = {
  success: null,
  requestStatus: {},
  data: {},
  allCampaigns: {},
  userCampaigns: [],
  campaignDonations: [],
  createdCampaign: {},
  editedCampaign: {},
  campaign: {},
  initDonation: {},
  verifiedPayment: {},
  completedCampaigns: {},
  organizationsData: {},
  organizationCampaignsData: {},
  rewards: [],
  closeCampaign: {},
  closeDonation: {},
  deleteCampaign: {},
  campaignsOfAVolunteer: [],
  volunteers: [],
  totalDonations: 0,
  totalCampaigns: 0,
  totalClosed: 0
};

const campaigns = (state = initialState, action) => {
  switch (action.type) {
    case Action.USER_CREATE_CAMPAIGN_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Action.USER_CREATE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.response,
        createdCampaign: action.payload.createdCampaign
      };

    case Action.FETCH_ALL_CAMPAIGNS_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Action.FETCH_ALL_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        allCampaigns: {
          ...state.allCampaigns,
          ...action.payload.data
        }
      };

    case Action.FETCH_SUCCESS_STORY_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      }

    case Action.FETCH_SUCCESS_STORY_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        completedCampaigns: action.payload.data
      };

    case Action.FETCH_ORGANIZATIONS_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      }

    case Action.FETCH_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        organizationsData: action.payload.data
      }

    case Action.FETCH_USER_CAMPAIGNS_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Action.FETCH_USER_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        userCampaigns: action.payload.data
      };

    case Action.FETCH_CAMPAIGN_BY_ID_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Action.FETCH_CAMPAIGN_BY_ID_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        campaign: action.payload.data
      };

    case Action.SET_CAMPAIGN_DATA:
      return {
        ...state,
        data: action.payload
      };

    case Action.INITIATE_DONATION_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        initDonation: action.payload.data
      };

    case Action.INITIATE_DONATION_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Action.VERIFY_PAYMENT_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        verifiedPayment: action.payload.data
      };

    case Action.VERIFY_PAYMENT_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Action.GET_CAMPAIGN_DONATION_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        campaignDonations: action.payload.data
      };

    case Action.GET_CAMPAIGN_DONATION_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Action.GET_CAMPAIGN_DONATION_BY_ID_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        campaignDonations: action.payload.data
      };

    case Action.GET_CAMPAIGN_DONATION_BY_ID_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Action.GET_REWARD_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        rewards: action.payload.data
      };

    case Action.GET_REWARD_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Action.ADD_REWARD_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status
      };

    case Action.ADD_REWARD_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Action.EDIT_REWARD_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status
      };

    case Action.EDIT_REWARD_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Action.DELETE_REWARD_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status
      };

    case Action.DELETE_REWARD_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      };

    case Action.FETCH_ORGANIZATION_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        organizationCampaignsData: action.payload.data
      }

    case Action.FETCH_ORGANIZATION_CAMPAIGNS_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      }

    case Action.CLOSE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        closeCampaign: action.payload.data
      }

    case Action.CLOSE_CAMPAIGN_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      }

    case Action.CLOSE_DONATION_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        closeDonation: action.payload.data
      }

    case Action.CLOSE_DONATION_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      }

    case Action.DELETE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        deleteCampaign: action.payload.data
      }

    case Action.DELETE_CAMPAIGN_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      }

    case Action.REPORT_CAMPAIGN_SUCCESS:
      return {
        ...state,
        success: true,
        requestStatus: action.payload.status,
        //deleteCampaign: action.payload.data
      }

    case Action.REPORT_CAMPAIGN_ERROR:
      return {
        ...state,
        success: false,
        requestStatus: action.payload
      }

    case Action.GET_CAMPAIGN_VOLUNTEER_SUCCESS:
      return {
        ...state,
        success: action.payload.status,
        campaignsOfAVolunteer: action.payload.data
      }

    case Action.GET_VOLUNTEER_CAMPAIGN_SUCCESS:
      return {
        ...state,
        success: action.payload.status,
        volunteers: action.payload.data
      }

    case Action.GET_TOTAL_DONATIONS_SUCCESS:
      return {
        ...state,
        success: action.payload.status,
        totalDonations: action.payload.data.total_donations
      }

    case Action.GET_TOTAL_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        success: action.payload.status.data,
        totalCampaigns: action.payload.data.total_campaigns
      }

    case Action.GET_TOTAL_CLOSED_SUCCESS:
      return {
        ...state,
        success: action.payload.status.data,
        totalClosed: action.payload.data.total_closed
      }

    default:
      return state;
  }
};

export default campaigns;
/**
  campaignsOfAVolunteer: [],
  volunteers: [],
  totalDonations: 0,
  totalCampaigns: 0, */