import { put, takeLatest, takeEvery, call, all } from "redux-saga/effects";

import campaignService from "../../services/campaignServices";
import {
  USER_CREATE_CAMPAIGN,
  USER_CREATE_CAMPAIGN_SUCCESS,
  USER_CREATE_CAMPAIGN_ERROR,
  setCampaignData,
  FETCH_ALL_CAMPAIGNS,
  FETCH_ALL_CAMPAIGNS_SUCCESS,
  FETCH_ALL_CAMPAIGNS_ERROR,
  FETCH_SUCCESS_STORY,
  FETCH_SUCCESS_STORY_SUCCESS,
  FETCH_SUCCESS_STORY_ERROR,
  FETCH_ORGANIZATIONS,
  FETCH_ORGANIZATIONS_SUCCESS,
  FETCH_ORGANIZATIONS_ERROR,
  FETCH_USER_CAMPAIGNS,
  FETCH_USER_CAMPAIGNS_SUCCESS,
  FETCH_USER_CAMPAIGNS_ERROR,
  UPLOAD_CAMPAIGN_IMAGE,
  FETCH_CAMPAIGN_BY_ID,
  FETCH_CAMPAIGN_BY_ID_SUCCESS,
  FETCH_CAMPAIGN_BY_ID_ERROR,
  INITIATE_DONATION,
  INITIATE_DONATION_SUCCESS,
  INITIATE_DONATION_ERROR,
  VERIFY_PAYMENT,
  VERIFY_PAYMENT_SUCCESS,
  VERIFY_PAYMENT_ERROR,
  EDIT_USER_CAMPAIGN,
  EDIT_USER_CAMPAIGN_SUCCESS,
  EDIT_USER_CAMPAIGN_ERROR,
  GET_CAMPAIGN_DONATION,
  GET_CAMPAIGN_DONATION_ERROR,
  GET_CAMPAIGN_DONATION_SUCCESS,
  GET_CAMPAIGN_DONATION_BY_ID,
  GET_CAMPAIGN_DONATION_BY_ID_ERROR,
  GET_CAMPAIGN_DONATION_BY_ID_SUCCESS,
  GET_REWARD,
  GET_REWARD_SUCCESS,
  GET_REWARD_ERROR,
  ADD_REWARD,
  ADD_REWARD_SUCCESS,
  ADD_REWARD_ERROR,
  EDIT_REWARD,
  EDIT_REWARD_SUCCESS,
  EDIT_REWARD_ERROR,
  DELETE_REWARD,
  DELETE_REWARD_SUCCESS,
  DELETE_REWARD_ERROR,
  FETCH_ORGANIZATION_CAMPAIGNS,
  FETCH_ORGANIZATION_CAMPAIGNS_SUCCESS,
  FETCH_ORGANIZATION_CAMPAIGNS_ERROR,
  CLOSE_CAMPAIGN,
  CLOSE_CAMPAIGN_SUCCESS,
  CLOSE_CAMPAIGN_ERROR,
  CLOSE_DONATION,
  CLOSE_DONATION_SUCCESS,
  CLOSE_DONATION_ERROR,
  DELETE_CAMPAIGN,
  DELETE_CAMPAIGN_SUCCESS,
  DELETE_CAMPAIGN_ERROR,
  UPLOAD_CAMPAIGN_THANK_YOU_IMAGE,
  UPLOAD_VOLUNTEER_BILL_IMAGE,
  UPLOAD_VOLUNTEER_IDENTIFICATION_DOCUMENT,
  REPORT_CAMPAIGN,
  REPORT_CAMPAIGN_SUCCESS,
  REPORT_CAMPAIGN_ERROR
} from "./actions";
import {
  setLoading,
  showRequestFeedBack,
  openModalAction,
  modalOptions
} from "../utilsModule/actions";

export const campaignRequest = {
  userCampaignRequest: "userCampaignRequest",
  fetchAllCampaignsRequest: "fetchAllCampaignsRequest",
  fetchUserCampaignsRequest: "fetchUserCampaignsRequest",
  uploadCampaignImageRequest: "uploadCampaignImageRequest",
  fetchCampaignByIdRequest: "fetchCampaignByIdRequest",
  initiateDonationRequest: "initiateDonationRequest",
  verifyPaymentRequest: "verifyPaymentRequest",
  getCampaignDonationRequest: "getCampaignDonationRequest",
  completedCampaignsRequest: "completedCampaignsRequest",
  getRewardRequest: "getRewardRequest",
  addRewardRequest: "addRewardRequest",
  editRewardRequest: "editRewardRequest",
  deleteRewardRequest: "deleteRewardRequest",
  organizationsRequest: "organizationsRequest",
  organizationCampaignsRequest: "organizationCampaignsRequest",
  closeCampaignRequest: "closeCampaignRequest",
  closeDonationRequest: "closeDonationRequest",
  deleteCampaignRequest: "deleteCampaignRequest",
  uploadThankYouImageRequest: "uploadThankYouImageRequest",
  uploadVolunteerBillImageRequest: "uploadVolunteerBillImageRequest",
  uploadVolunteerIdentificationDocumentRequest: "uploadVolunteerIdentificationDocumentRequest",
  reportCampaignRequest: "reportCampaignRequest"
};

function* createCampaignActionSaga(action) {
  try {
    const { data, success } = action.payload;
    if (!data) {
      yield put({
        type: USER_CREATE_CAMPAIGN_SUCCESS,
        payload: {
          response: {},
          createdCampaign: {}
        }
      });
      return;
    }
    yield put(
      setLoading({
        request: campaignRequest.userCampaignRequest,
        loading: true
      })
    );
    const response = yield call(campaignService.userCreateCampaign, data);
    yield put(setLoading({ request: campaignRequest.userCampaignRequest }));
    if (response.data.status.code === 100) {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.userCampaignRequest,
          success: true
        })
      );
      yield put(setCampaignData(response.data.entity.user));
      yield put({
        type: USER_CREATE_CAMPAIGN_SUCCESS,
        payload: {
          response: response.data.status,
          createdCampaign: response.data.entity
        }
      });

      if (typeof success === "function") success();

    } else {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.userCampaignRequest,
          success: false
        })
      );
      yield put({
        type: USER_CREATE_CAMPAIGN_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(setLoading({ request: campaignRequest.userCampaignRequest }));
    yield put({
      type: USER_CREATE_CAMPAIGN_ERROR,
      payload: error
    });
  }
}

function* fetchAllCampaignsActionSaga({ payload }) {
  try {
    const queries = payload;
    yield put(
      setLoading({
        request: campaignRequest.fetchAllCampaignsRequest,
        loading: true
      })
    );
    const response = yield call(campaignService.fetchAllCampaigns, queries);
    yield put(
      setLoading({ request: campaignRequest.fetchAllCampaignsRequest })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: FETCH_ALL_CAMPAIGNS_SUCCESS,
        payload: {
          status: response.data.status,
          data: {
            [`${queries.time ? queries.time : "all"}Campaigns`]: response.data
              .entity
          }
        }
      });
    } else {
      yield put({
        type: FETCH_ALL_CAMPAIGNS_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.fetchAllCampaignsRequest })
    );
    yield put({
      type: FETCH_ALL_CAMPAIGNS_ERROR,
      payload: error
    });
  }
}

function* fetchCompletedCampaignsActionSaga(action) {
  try {
    const data = action.payload;
    yield put(
      setLoading({
        request: campaignRequest.completedCampaignsRequest,
        loading: true
      })
    );
    const response = yield call(campaignService.completedCampaigns, data);
    yield put(
      setLoading({ request: campaignRequest.completedCampaignsRequest })
    );
    yield put(
      showRequestFeedBack({
        message: response.data.status.desc,
        for: campaignRequest.completedCampaignsRequest,
        success: true
      })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: FETCH_SUCCESS_STORY_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
    } else {
      yield put({
        type: FETCH_SUCCESS_STORY_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.completedCampaignsRequest })
    );
    yield put({
      type: FETCH_SUCCESS_STORY_ERROR,
      payload: error
    })
  }
}

function* fetchUserCampaignsActionSaga(action) {
  try {
    yield put(
      setLoading({
        request: campaignRequest.fetchUserCampaignsRequest,
        loading: true
      })
    );
    const response = yield call(campaignService.fetchUserCampaigns);
    yield put(
      setLoading({ request: campaignRequest.fetchUserCampaignsRequest })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: FETCH_USER_CAMPAIGNS_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
    } else {
      yield put({
        type: FETCH_USER_CAMPAIGNS_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.fetchUserCampaignsRequest })
    );
    yield put({
      type: FETCH_USER_CAMPAIGNS_ERROR,
      payload: error
    });
  }
}

function* uploadCampaignImageActionSaga(action) {
  try {
    const {
      data,
      //createdCampaign,
      //history,
      showPercentageProgress,
      imageNumber,
      success
    } = action.payload;

    yield put(showPercentageProgress(0));
    yield put(
      setLoading({
        request: campaignRequest.uploadCampaignImageRequest,
        loading: true
      })
    );
    const response = yield call(
      campaignService.uploadCampaignImage,
      data,
      showPercentageProgress,
      imageNumber
    );
    yield put(
      setLoading({ request: campaignRequest.uploadCampaignImageRequest })
    );

    if (typeof success === "function") success();

    if (response.data.status.code === 100) {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.uploadCampaignImageRequest,
          success: true
        })
      );
      setTimeout(() => {
        //history.push(`/campaign/${createdCampaign.campaign_id.toLowerCase()}`);
      }, 1000);
    } else {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.uploadCampaignImageRequest,
          success: false
        })
      );
      yield put({
        type: FETCH_USER_CAMPAIGNS_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.uploadCampaignImageRequest })
    );
    yield put({
      type: FETCH_USER_CAMPAIGNS_ERROR,
      payload: error
    });
    yield put(
      showRequestFeedBack({
        message: "An error occured uploading the image",
        for: campaignRequest.uploadCampaignImageRequest,
        success: false
      })
    );
  }
}

function* fetchCampaignByIdActionSaga(action) {
  try {
    yield put(
      setLoading({
        request: campaignRequest.fetchCampaignByIdRequest,
        loading: true
      })
    );
    const response = yield call(
      campaignService.fetchCampaignById,
      action.payload
    );
    yield put(
      setLoading({ request: campaignRequest.fetchCampaignByIdRequest })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: FETCH_CAMPAIGN_BY_ID_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
    } else {
      yield put({
        type: FETCH_CAMPAIGN_BY_ID_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.fetchCampaignByIdRequest })
    );
    yield put({
      type: FETCH_CAMPAIGN_BY_ID_ERROR,
      payload: error
    });
  }
}

function* initiateDonationActionSaga(action) {
  try {
    yield put(setLoading({ request: campaignRequest.initiateDonationRequest, loading: true }));
    const response = yield call(
      campaignService.initiateDonation,
      action.payload
    );
    yield put(setLoading({ request: campaignRequest.initiateDonationRequest }));
    if (response.data.status.code === 100) {
      yield put({
        type: INITIATE_DONATION_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
      yield put(openModalAction(modalOptions.paystackPaymentModal));
    } else {
      yield put({
        type: INITIATE_DONATION_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(setLoading({}));
    yield put({
      type: INITIATE_DONATION_ERROR,
      payload: error
    });
  }
}

function* verifyPaymentActionSaga(action) {
  try {
    yield put(setLoading({ request: campaignRequest.verifyPaymentRequest }));
    const response = yield call(campaignService.verifyPayment, action.payload);
    yield put(setLoading({}));
    if (response.data.status.code === 100) {
      yield put({
        type: VERIFY_PAYMENT_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
      yield put({
        type: FETCH_CAMPAIGN_BY_ID,
        payload: {
          campaignId: action.payload.match.params.campaignId
        }
      });
    } else {
      yield put({
        type: VERIFY_PAYMENT_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(setLoading({}));
    yield put({
      type: VERIFY_PAYMENT_ERROR,
      payload: error
    });
  }
}

function* editCampaignActionSaga(action) {
  try {
    const { data, campaignId, success/*, history*/ } = action.payload;
    if (!data) {
      yield put(setLoading({ request: campaignRequest.userCampaignRequest }));
      yield put({
        type: EDIT_USER_CAMPAIGN_SUCCESS,
        payload: {
          response: {},
          createdCampaign: {}
        }
      });
      return;
    }
    yield put(setLoading({ request: campaignRequest.userCampaignRequest, loading: true }));
    const response = yield call(
      campaignService.userEditCampaign,
      data,
      campaignId
    );
    yield put(setLoading({ request: campaignRequest.userCampaignRequest }));
    if (response.data.status.code === 100) {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.userCampaignRequest,
          success: true
        })
      );
      yield put(setCampaignData(response.data.entity.user));
      yield put({
        type: EDIT_USER_CAMPAIGN_SUCCESS,
        payload: {
          response: response.data.status,
          createdCampaign: response.data.entity
        }
      });

      if (typeof success === "function") success();

    } else {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.userCampaignRequest,
          success: true
        })
      );
      yield put({
        type: EDIT_USER_CAMPAIGN_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(setLoading({}));
    yield put({
      type: EDIT_USER_CAMPAIGN_ERROR,
      payload: error
    });
  }
}

function* getCampaignDonationActionSaga(action) {
  try {
    // const {} = action.payload;
    yield put(
      setLoading({
        request: campaignRequest.getCampaignDonationRequest,
        loading: true
      })
    );
    const response = yield call(campaignService.getCampaignDonation);
    yield put(
      setLoading({ request: campaignRequest.getCampaignDonationRequest })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: GET_CAMPAIGN_DONATION_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
    } else {
      yield put({
        type: GET_CAMPAIGN_DONATION_ERROR,
        payload: { status: response.data.status, data: undefined }
      });
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.getCampaignDonationRequest })
    );
    yield put({
      type: GET_CAMPAIGN_DONATION_ERROR,
      payload: { status: error, data: undefined }
    });
  }
}

function* getCampaignDonationByIdActionSaga(action) {
  try {
    // const {} = action.payload;
    yield put(
      setLoading({
        request: campaignRequest.getCampaignDonationRequest,
        loading: true
      })
    );
    const response = yield call(campaignService.getCampaignDonationById, action.payload);
    yield put(
      setLoading({ request: campaignRequest.getCampaignDonationRequest })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: GET_CAMPAIGN_DONATION_BY_ID_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
    } else {
      yield put({
        type: GET_CAMPAIGN_DONATION_BY_ID_ERROR,
        payload: { status: response.data.status, data: undefined }
      });
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.getCampaignDonationRequest })
    );
    yield put({
      type: GET_CAMPAIGN_DONATION_BY_ID_ERROR,
      payload: { status: error, data: undefined }
    });
  }
}


function* getRewardSaga(action) {
  try {
    const { id, success } = action.payload;

    yield put(
      setLoading({
        request: campaignRequest.getRewardRequest,
        loading: true
      })
    );
    const response = yield call(campaignService.getReward, id);
    yield put(
      setLoading({ request: campaignRequest.getRewardRequest })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: GET_REWARD_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.getRewardRequest,
          success: true
        })
      );

      if (typeof success === "function") success();

    } else {
      yield put({
        type: GET_REWARD_ERROR,
        payload: { status: response.data.status, data: undefined }
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.getRewardRequest,
          success: false
        })
      );
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.getRewardRequest })
    );
    yield put({
      type: GET_REWARD_ERROR,
      payload: { status: error, data: undefined }
    });
  }
}

function* addRewardSaga(action) {
  try {
    const { data, success } = action.payload;

    yield put(
      setLoading({
        request: campaignRequest.addRewardRequest,
        loading: true
      })
    );
    const response = yield call(campaignService.addReward, data);
    yield put(
      setLoading({ request: campaignRequest.addRewardRequest })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: ADD_REWARD_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.addRewardRequest,
          success: true
        })
      );

      if (typeof success === "function") success();

    } else {
      yield put({
        type: ADD_REWARD_ERROR,
        payload: { status: response.data.status, data: undefined }
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.addRewardRequest,
          success: false
        })
      );
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.addRewardRequest })
    );
    yield put({
      type: ADD_REWARD_ERROR,
      payload: { status: error, data: undefined }
    });
  }
}

function* editRewardSaga(action) {
  try {
    const { data, id, success } = action.payload;

    yield put(
      setLoading({
        request: campaignRequest.editRewardRequest,
        loading: true
      })
    );
    const response = yield call(campaignService.editReward, data, id);
    yield put(
      setLoading({ request: campaignRequest.editRewardRequest })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: EDIT_REWARD_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.editRewardRequest,
          success: true
        })
      );

      if (typeof success === "function") success();

    } else {
      yield put({
        type: EDIT_REWARD_ERROR,
        payload: { status: response.data.status, data: undefined }
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.editRewardRequest,
          success: false
        })
      );
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.editRewardRequest })
    );
    yield put({
      type: EDIT_REWARD_ERROR,
      payload: { status: error, data: undefined }
    });
  }
}



function* deleteRewardSaga(action) {
  try {
    const { id, success } = action.payload;

    yield put(
      setLoading({
        request: campaignRequest.deleteRewardRequest,
        loading: true
      })
    );
    const response = yield call(campaignService.deleteReward, id);
    yield put(
      setLoading({ request: campaignRequest.deleteRewardRequest })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: DELETE_REWARD_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.deleteRewardRequest,
          success: true
        })
      );

      if (typeof success === "function") success();

    } else {
      yield put({
        type: DELETE_REWARD_ERROR,
        payload: { status: response.data.status, data: undefined }
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.deleteRewardRequest,
          success: false
        })
      );
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.deleteRewardRequest })
    );
    yield put({
      type: DELETE_REWARD_ERROR,
      payload: { status: error, data: undefined }
    });
  }
}

function* organizationActionSaga(action) {
  try {
    const data = action.payload;

    yield put(
      setLoading({
        request: campaignRequest.organizationsRequest,
        loading: true
      })
    );
    const response = yield call(campaignService.fetchOrganizations, data);
    yield put(
      setLoading({ request: campaignRequest.organizationsRequest })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: FETCH_ORGANIZATIONS_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
    } else {
      yield put({
        type: FETCH_ORGANIZATIONS_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.organizationsRequest })
    );
    yield put({
      type: FETCH_ORGANIZATIONS_ERROR,
      payload: error
    })
  }
}

function* organizationCampaignsSaga(action) {
  try {
    const data = action.payload;

    yield put(
      setLoading({
        request: campaignRequest.organizationCampaignsRequest,
        loading: true
      })
    );
    const response = yield call(campaignService.fetchOrganizationCampaigns, data);
    yield put(
      setLoading({ request: campaignRequest.organizationCampaignsRequest })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: FETCH_ORGANIZATION_CAMPAIGNS_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
    } else {
      yield put({
        type: FETCH_ORGANIZATION_CAMPAIGNS_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.organizationCampaignsRequest })
    );
    yield put({
      type: FETCH_ORGANIZATION_CAMPAIGNS_ERROR,
      payload: error
    })
  }
}

function* closeCampaignSaga(action) {
  try {
    const { message, id, campaign_id, success } = action.payload;

    yield put(
      setLoading({
        request: campaignRequest.closeCampaignRequest,
        loading: true
      })
    );
    const response = yield call(campaignService.closeCampaign, message, id);
    yield put(
      setLoading({ request: campaignRequest.closeCampaignRequest })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: CLOSE_CAMPAIGN_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.closeCampaignRequest,
          success: true
        })
      );

      if (typeof success === "function") success();

      window.location = window.location.origin + "/campaign/" + campaign_id.toLowerCase();

    } else {
      yield put({
        type: CLOSE_CAMPAIGN_ERROR,
        payload: { status: response.data.status, data: undefined }
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.closeCampaignRequest,
          success: false
        })
      );
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.closeCampaignRequest })
    );
    yield put({
      type: CLOSE_CAMPAIGN_ERROR,
      payload: { status: error, data: undefined }
    });
  }
}

function* closeDonationSaga(action) {
  try {
    const { id, success } = action.payload;

    yield put(
      setLoading({
        request: campaignRequest.closeDonationRequest,
        loading: true
      })
    );
    const response = yield call(campaignService.closeDonation, id);
    yield put(
      setLoading({ request: campaignRequest.closeDonationRequest })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: CLOSE_DONATION_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.closeDonationRequest,
          success: true
        })
      );

      if (typeof success === "function") success();

    } else {
      yield put({
        type: CLOSE_DONATION_ERROR,
        payload: { status: response.data.status, data: undefined }
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.closeDonationRequest,
          success: false
        })
      );
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.closeDonationRequest })
    );
    yield put({
      type: CLOSE_DONATION_ERROR,
      payload: { status: error, data: undefined }
    });
  }
}

function* deleteCampaignSaga(action) {
  try {
    const { id, success } = action.payload;

    yield put(
      setLoading({
        request: campaignRequest.deleteCampaignRequest,
        loading: true
      })
    );
    const response = yield call(campaignService.deleteCampaign, id);
    yield put(
      setLoading({ request: campaignRequest.deleteCampaignRequest })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: DELETE_CAMPAIGN_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.deleteCampaignRequest,
          success: true
        })
      );

      if (typeof success === "function") success();

    } else {
      yield put({
        type: DELETE_CAMPAIGN_ERROR,
        payload: { status: response.data.status, data: undefined }
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.deleteCampaignRequest,
          success: false
        })
      );
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.deleteCampaignRequest })
    );
    yield put({
      type: DELETE_CAMPAIGN_ERROR,
      payload: { status: error, data: undefined }
    });
  }
}

function* uploadThankYouImageActionSaga(action) {
  try {
    const {
      data,
      //createdCampaign,
      //history,
      showPercentageProgress,
      imageNumber,
      success
    } = action.payload;

    yield put(showPercentageProgress(0));
    yield put(
      setLoading({
        request: campaignRequest.uploadThankYouImageRequest,
        loading: true
      })
    );
    const response = yield call(
      campaignService.uploadThankYouImage,
      data,
      showPercentageProgress,
      imageNumber
    );
    yield put(
      setLoading({ request: campaignRequest.uploadThankYouImageRequest })
    );

    if (typeof success === "function") success();

    if (response.data.status.code === 100) {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.uploadThankYouImageRequest,
          success: true
        })
      );
    } else {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.uploadThankYouImageRequest,
          success: false
        })
      );
      yield put({
        type: CLOSE_CAMPAIGN_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.uploadThankYouImageRequest })
    );
    yield put({
      type: CLOSE_CAMPAIGN_ERROR,
      payload: error
    });
    yield put(
      showRequestFeedBack({
        message: "An error occured uploading the image",
        for: campaignRequest.uploadThankYouImageRequest,
        success: false
      })
    );
  }
}
  
 

function* uploadVolunteerBillSaga(action) {
  try {
    const {
      data,
      showPercentageProgress,
      success
    } = action.payload;

    yield put(showPercentageProgress(0));
    yield put(
      setLoading({
        request: campaignRequest.uploadVolunteerBillImageRequest,
        loading: true
      })
    );
    const response = yield call(
      campaignService.uploadVolunteerBillImage,
      data,
      showPercentageProgress
    );
    yield put(
      setLoading({ request: campaignRequest.uploadVolunteerBillImageRequest })
    );

    if (typeof success === "function") success();

    if (response.data.status.code === 100) {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.uploadVolunteerBillImageRequest,
          success: true
        })
      );
    } else {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.uploadVolunteerBillImageRequest,
          success: false
        })
      );
      yield put({
        type: CLOSE_CAMPAIGN_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.uploadVolunteerBillImageRequest })
    );
    yield put({
      type: CLOSE_CAMPAIGN_ERROR,
      payload: error
    });
    yield put(
      showRequestFeedBack({
        message: "An error occured uploading the image",
        for: campaignRequest.uploadVolunteerBillImageRequest,
        success: false
      })
    );
  }
}



function* uploadVolunteerIdentificationSaga(action) {
  try {
    const {
      data,
      showPercentageProgress,
      success
    } = action.payload;

    yield put(showPercentageProgress(0));
    yield put(
      setLoading({
        request: campaignRequest.uploadVolunteerIdentificationDocumentRequest,
        loading: true
      })
    );
    const response = yield call(
      campaignService.uploadVolunteerIdentificationDocument,
      data,
      showPercentageProgress
    );
    yield put(
      setLoading({ request: campaignRequest.uploadVolunteerIdentificationDocumentRequest })
    );

    if (typeof success === "function") success();

    if (response.data.status.code === 100) {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.uploadVolunteerIdentificationDocumentRequest,
          success: true
        })
      );
    } else {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.uploadVolunteerIdentificationDocumentRequest,
          success: false
        })
      );
      yield put({
        type: CLOSE_CAMPAIGN_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.uploadVolunteerIdentificationDocumentRequest })
    );
    yield put({
      type: CLOSE_CAMPAIGN_ERROR,
      payload: error
    });
    yield put(
      showRequestFeedBack({
        message: "An error occured uploading the image",
        for: campaignRequest.uploadVolunteerIdentificationDocumentRequest,
        success: false
      })
    );
  }
}



function* reportCampaignSaga(action) {
  try {
    const data = action.payload;

    //yield put(showPercentageProgress(0));
    yield put(
      setLoading({
        request: campaignRequest.reportCampaignRequest,
        loading: true
      })
    );
    const response = yield call(
      campaignService.reportCampaign,
      data//,
      //showPercentageProgress
    );
    yield put(
      setLoading({ request: campaignRequest.reportCampaignRequest })
    );

    if (response.data.status.code === 100) {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.reportCampaignRequest,
          success: true
        })
      );
    } else {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: campaignRequest.reportCampaignRequest,
          success: false
        })
      );
      yield put({
        type: REPORT_CAMPAIGN_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({ request: campaignRequest.reportCampaignRequest })
    );
    yield put({
      type: REPORT_CAMPAIGN_ERROR,
      payload: error
    });
    yield put(
      showRequestFeedBack({
        message: "An error occured uploading the image",
        for: campaignRequest.reportCampaignRequest,
        success: false
      })
    );
  }
}


function* fetchUserCampaignsWatcher() {
  yield takeEvery(FETCH_USER_CAMPAIGNS, fetchUserCampaignsActionSaga);
}

function* fetchAllCampaignsWatcher() {
  yield takeEvery(FETCH_ALL_CAMPAIGNS, fetchAllCampaignsActionSaga);
}

function* fetchCompletedCampaignsActionWatcher() {
  yield takeLatest(FETCH_SUCCESS_STORY, fetchCompletedCampaignsActionSaga)
}

function* userCreateCampaignWatcher() {
  yield takeLatest(USER_CREATE_CAMPAIGN, createCampaignActionSaga);
}

function* uploadCampaignImageWatcher() {
  yield takeLatest(UPLOAD_CAMPAIGN_IMAGE, uploadCampaignImageActionSaga);
}

function* fetchCampaignByIdWatcher() {
  yield takeLatest(FETCH_CAMPAIGN_BY_ID, fetchCampaignByIdActionSaga);
}

function* initiateDonationWatcher() {
  yield takeLatest(INITIATE_DONATION, initiateDonationActionSaga);
}

function* verifyPaymentWatcher() {
  yield takeLatest(VERIFY_PAYMENT, verifyPaymentActionSaga);
}

function* editCampaignWatcher() {
  yield takeLatest(EDIT_USER_CAMPAIGN, editCampaignActionSaga);
}

function* getCampaignDonationWatcher() {
  yield takeLatest(GET_CAMPAIGN_DONATION, getCampaignDonationActionSaga);
}

function* getCampaignDonationByIdWatcher() {
  yield takeLatest(GET_CAMPAIGN_DONATION_BY_ID, getCampaignDonationByIdActionSaga);
}

function* getRewardWatcher() {
  yield takeLatest(GET_REWARD, getRewardSaga);
}

function* addRewardWatcher() {
  yield takeLatest(ADD_REWARD, addRewardSaga);
}

function* editRewardWatcher() {
  yield takeLatest(EDIT_REWARD, editRewardSaga);
}

function* deleteRewardWatcher() {
  yield takeLatest(DELETE_REWARD, deleteRewardSaga);
}

function* organizationsWatcher() {
  yield takeLatest(FETCH_ORGANIZATIONS, organizationActionSaga)
}

function* organizationCampaignsWatcher() {
  yield takeLatest(FETCH_ORGANIZATION_CAMPAIGNS, organizationCampaignsSaga)
}

function* closeCampaignWatcher() {
  yield takeLatest(CLOSE_CAMPAIGN, closeCampaignSaga);
}

function* closeDonationWatcher() {
  yield takeLatest(CLOSE_DONATION, closeDonationSaga);
}

function* deleteCampaignWatcher() {
  yield takeLatest(DELETE_CAMPAIGN, deleteCampaignSaga);
}

function* uploadThankYouImageWatcher() {
  yield takeLatest(UPLOAD_CAMPAIGN_THANK_YOU_IMAGE, uploadThankYouImageActionSaga);
}

function* uploadVolunteerBillWatcher() {
  yield takeLatest(UPLOAD_VOLUNTEER_BILL_IMAGE, uploadVolunteerBillSaga);
}

function* uploadVolunteerIdentificationWatcher() {
  yield takeLatest(UPLOAD_VOLUNTEER_IDENTIFICATION_DOCUMENT, uploadVolunteerIdentificationSaga);
}

function* reportCampaignWatcher() {
  yield takeLatest(REPORT_CAMPAIGN, reportCampaignSaga);
}

export default function* campaignSaga() {
  yield all([
    userCreateCampaignWatcher(),
    fetchAllCampaignsWatcher(),
    fetchCompletedCampaignsActionWatcher(),
    fetchUserCampaignsWatcher(),
    uploadCampaignImageWatcher(),
    fetchCampaignByIdWatcher(),
    initiateDonationWatcher(),
    verifyPaymentWatcher(),
    editCampaignWatcher(),
    getCampaignDonationWatcher(),
    getCampaignDonationByIdWatcher(),
    getRewardWatcher(),
    addRewardWatcher(),
    editRewardWatcher(),
    deleteRewardWatcher(),
    organizationsWatcher(),
    organizationCampaignsWatcher(),
    closeCampaignWatcher(),
    closeDonationWatcher(),
    deleteCampaignWatcher(),
    uploadThankYouImageWatcher(),
    uploadVolunteerBillWatcher(),
    uploadVolunteerIdentificationWatcher(),
    reportCampaignWatcher()
  ]);
}