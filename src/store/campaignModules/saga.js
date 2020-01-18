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
  GET_CAMPAIGN_DONATION_BY_ID_SUCCESS
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
  getCampaignDonationRequest: "getCampaignDonationRequest"
};

function* createCampaignActionSaga(action) {
  try {
    const { data/*, history*/ } = action.payload;
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
      createdCampaign,
      history,
      showPercentageProgress
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
      showPercentageProgress
    );
    yield put(
      setLoading({ request: campaignRequest.uploadCampaignImageRequest })
    );
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
    yield put(setLoading({ request: campaignRequest.initiateDonationRequest, loading : true }));
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
    const { data, campaignId/*, history*/ } = action.payload;
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

function* fetchUserCampaignsWatcher() {
  yield takeEvery(FETCH_USER_CAMPAIGNS, fetchUserCampaignsActionSaga);
}

function* fetchAllCampaignsWatcher() {
  yield takeEvery(FETCH_ALL_CAMPAIGNS, fetchAllCampaignsActionSaga);
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

export default function* campaignSaga() {
  yield all([
    userCreateCampaignWatcher(),
    fetchAllCampaignsWatcher(),
    fetchUserCampaignsWatcher(),
    uploadCampaignImageWatcher(),
    fetchCampaignByIdWatcher(),
    initiateDonationWatcher(),
    verifyPaymentWatcher(),
    editCampaignWatcher(),
    getCampaignDonationWatcher(),
    getCampaignDonationByIdWatcher()
  ]);
}
