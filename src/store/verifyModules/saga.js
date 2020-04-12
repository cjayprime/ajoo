import { put, takeLatest, call, all } from "redux-saga/effects";

import verifyService from "../../services/verifyService";
import {
  VERIFY_SIGNUP,
  VERIFY_SIGNUP_SUCCESS,
  VERIFY_SIGNUP_ERROR,
  UPLOAD_FEATURE_IMAGE_FOR_VERIFICATION,
  UPLOAD_FEATURE_IMAGE_FOR_VERIFICATION_SUCCESS,
  UPLOAD_FEATURE_IMAGE_FOR_VERIFICATION_ERROR,
  UPLOAD_DOCUMENT_IMAGE_FOR_VERIFICATION,
  UPLOAD_DOCUMENT_IMAGE_FOR_VERIFICATION_SUCCESS,
  UPLOAD_DOCUMENT_IMAGE_FOR_VERIFICATION_ERROR,
  GET_ALL_VOLUNTEERS,
  GET_ALL_VOLUNTEERS_SUCCESS,
  GET_ALL_VOLUNTEERS_ERROR,
  VERIFY_CAMPAIGN,
  VERIFY_CAMPAIGN_SUCCESS,
  VERIFY_CAMPAIGN_ERROR
} from "./actions";
import { setLoading, showRequestFeedBack } from "../utilsModule/actions";

export const verifyRequest = {
    verifyVolunteerImageRequest: "verifyVolunteerImageRequest",
    verifySignupRequest: "verifySignupRequest",
    uploadFeatureImageRequest: "uploadFeatureImageRequest",
    uploadDocumentImageRequest: "uploadDocumentImageRequest",
    getAllVolunteersRequest: "getAllVolunteersRequest",
    verifyCampaignRequest: "verifyCampaignRequest"
};




function* verifySignupSaga(action){
  try {
    const { data } = action.payload;
    yield put(
      setLoading({
        request: verifyRequest.verifySignupRequest,
        loading: true
      })
    );
    const response = yield call(
      verifyService.verifySignup,
      data
    );
    yield put(
      setLoading({
        request: verifyRequest.verifySignupRequest,
        loading: false
      })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: VERIFY_SIGNUP_SUCCESS,
        payload: response.data.status
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: verifyRequest.verifySignupRequest,
          success: true
        })
      );
      
      setTimeout(() => {
        window.location = window.location.origin;
      }, 2000);

    } else {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: verifyRequest.verifySignupRequest,
          success: false
        })
      );
      yield put({
        type: VERIFY_SIGNUP_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({
        request: verifyRequest.verifySignupRequest,
        loading: false
      })
    );
    yield put({
      type: VERIFY_SIGNUP_ERROR,
      payload: error
    });
    yield put(
      showRequestFeedBack({
        message: "An error occured uploading profile image",
        for: verifyRequest.verifySignupRequest,
        success: false
      })
    );
  }
}

function* uploadFeatureImageForVerificationSaga(action) {
  try {
    const { data, showPercentageProgress } = action.payload;

    yield put(showPercentageProgress(0));
    yield put(
      setLoading({
        request: verifyRequest.uploadFeatureImageRequest,
        loading: true
      })
    );
    const response = yield call(
      verifyService.uploadFeatureImage,
      data,
      showPercentageProgress
    );
    yield put(
      setLoading({
        request: verifyRequest.uploadFeatureImageRequest,
        loading: false
      })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: UPLOAD_FEATURE_IMAGE_FOR_VERIFICATION_SUCCESS,
        payload: response.data.status
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: verifyRequest.uploadFeatureImageRequest,
          success: true
        })
      );
    } else {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: verifyRequest.uploadFeatureImageRequest,
          success: false
        })
      );
      yield put({
        type: UPLOAD_FEATURE_IMAGE_FOR_VERIFICATION_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({
        request: verifyRequest.uploadFeatureImageRequest,
        loading: false
      })
    );
    yield put({
      type: UPLOAD_FEATURE_IMAGE_FOR_VERIFICATION_ERROR,
      payload: error
    });
    yield put(
      showRequestFeedBack({
        message: "An error occured uploading profile image",
        for: verifyRequest.uploadFeatureImageRequest,
        success: false
      })
    );
  }
}

  
 

function* uploadDocumentImageForVerificationSaga(action) {
  try {
    const { data, showPercentageProgress } = action.payload;

    yield put(showPercentageProgress(0));
    yield put(
      setLoading({
        request: verifyRequest.uploadDocumentImageRequest,
        loading: true
      })
    );
    const response = yield call(
      verifyService.uploadDocumentImage,
      data,
      showPercentageProgress
    );
    yield put(
      setLoading({
        request: verifyRequest.uploadDocumentImageRequest,
        loading: false
      })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: UPLOAD_DOCUMENT_IMAGE_FOR_VERIFICATION_SUCCESS,
        payload: response.data.status
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: verifyRequest.uploadDocumentImageRequest,
          success: true
        })
      );
    } else {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: verifyRequest.uploadDocumentImageRequest,
          success: false
        })
      );
      yield put({
        type: UPLOAD_DOCUMENT_IMAGE_FOR_VERIFICATION_ERROR,
        payload: { ...response.data, category: "Identification-Document-Upload-Failed" }
      });
    }
  } catch (error) {
    yield put(
      setLoading({
        request: verifyRequest.uploadDocumentImageRequest,
        loading: false
      })
    );
    yield put({
      type: UPLOAD_DOCUMENT_IMAGE_FOR_VERIFICATION_ERROR,
      payload: error
    });
    yield put(
      showRequestFeedBack({
        message: "An error occured uploading profile image",
        for: verifyRequest.uploadDocumentImageRequest,
        success: false
      })
    );
  }
}






function* getAllCampaignsSaga(action){
  try {
    yield put(
      setLoading({
        request: verifyRequest.getAllVolunteersRequest,
        loading: true
      })
    );
    const response = yield call(verifyService.getAllRequest);
    
    yield put(
      setLoading({
        request: verifyRequest.getAllVolunteersRequest,
        loading: false
      })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: GET_ALL_VOLUNTEERS_SUCCESS,
        payload: response.data
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: verifyRequest.getAllVolunteersRequest,
          success: true
        })
      );
    } else {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: verifyRequest.getAllVolunteersRequest,
          success: false
        })
      );
      yield put({
        type: GET_ALL_VOLUNTEERS_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({
        request: verifyRequest.getAllVolunteersRequest,
        loading: false
      })
    );
    yield put({
      type: GET_ALL_VOLUNTEERS_ERROR,
      payload: error
    });
    yield put(
      showRequestFeedBack({
        message: "An error occured while loading all volunteers",
        for: verifyRequest.getAllVolunteersRequest,
        success: false
      })
    );
  }
}









function* verifyCampaignsSaga(action){
  const data = action.payload;

  try {
    yield put(
      setLoading({
        request: verifyRequest.verifyCampaignRequest,
        loading: true
      })
    );
    
    const response = yield call(verifyService.verifyCampaign, data);
    
    yield put(
      setLoading({
        request: verifyRequest.verifyCampaignRequest,
        loading: false
      })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: VERIFY_CAMPAIGN_SUCCESS,
        payload: response.data
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: verifyRequest.verifyCampaignRequest,
          success: true
        })
      );
    } else {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: verifyRequest.verifyCampaignRequest,
          success: false
        })
      );
      yield put({
        type: VERIFY_CAMPAIGN_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({
        request: verifyRequest.verifyCampaignRequest,
        loading: false
      })
    );
    yield put({
      type: VERIFY_CAMPAIGN_ERROR,
      payload: error
    });
    yield put(
      showRequestFeedBack({
        message: "An error occured while verifying campaign",
        for: verifyRequest.verifyCampaignRequest,
        success: false
      })
    );
  }
}





function* verifySignupWatcher() {
  yield takeLatest(VERIFY_SIGNUP, verifySignupSaga);
}

function* uploadFeatureImageForVerificationWatcher() {
  yield takeLatest(UPLOAD_FEATURE_IMAGE_FOR_VERIFICATION, uploadFeatureImageForVerificationSaga);
} 

function* uploadDocumentImageForVerificationWatcher() {
  yield takeLatest(UPLOAD_DOCUMENT_IMAGE_FOR_VERIFICATION, uploadDocumentImageForVerificationSaga);
}

function* getAllCampaignsWatcher() {
  yield takeLatest(GET_ALL_VOLUNTEERS, getAllCampaignsSaga);
}

function* verifyCampaignsWatcher() {
  yield takeLatest(VERIFY_CAMPAIGN, verifyCampaignsSaga);
}

export default function* verifySaga() {
    yield all([
      verifySignupWatcher(),
      uploadFeatureImageForVerificationWatcher(),
      uploadDocumentImageForVerificationWatcher(),
      getAllCampaignsWatcher(),
      verifyCampaignsWatcher()
    ]);
}