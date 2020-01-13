import { put, takeLatest, call, all } from "redux-saga/effects";

import settingService from "../../services/settingServices";
import {
  INDIVIDUAL_SETTING,
  INDIVIDUAL_SETTING_SUCCESS,
  INDIVIDUAL_SETTING_ERROR,
  INDIVIDUAL_EMAIL_SETTING,
  INDIVIDUAL_EMAIL_SETTING_SUCCESS,
  INDIVIDUAL_EMAIL_SETTING_ERROR,
  INDIVIDUAL_PASSWORD_SETTING,
  INDIVIDUAL_PASSWORD_SETTING_SUCCESS,
  INDIVIDUAL_PASSWORD_SETTING_ERROR,
  ORGANISATION_SETTING,
  ORGANISATION_SETTING_SUCCESS,
  ORGANISATION_SETTING_ERROR,
  ORGANISATION_EMAIL_SETTING,
  ORGANISATION_EMAIL_SETTING_SUCCESS,
  ORGANISATION_EMAIL_SETTING_ERROR,
  ORGANISATION_PASSWORD_SETTING,
  ORGANISATION_PASSWORD_SETTING_SUCCESS,
  ORGANISATION_PASSWORD_SETTING_ERROR,
  // USER_PROFILE_IMAGE,
  // USER_PROFILE_IMAGE_SUCCESS,
  // USER_PROFILE_IMAGE_ERROR,
  updateUserData
} from "./actions";
import { setLoading, showRequestFeedBack } from "../utilsModule/actions";
import { setUserData } from "../authModules/actions";

export const settingRequest = {
  individualProfileRequest: "individualProfileRequest",
  individualEmailSettingRequest: "individualEmailSettingRequest",
  individualPasswordSettingRequest: "individualPasswordSettingRequest",
  organisationProfileRequest: "organisationProfileRequest",
  organisationEmailSettingRequest: "organisationEmailSettingRequest",
  organisationPasswordSettingRequest: "organisationPasswordSettingRequest"
  // userProfileImageRequest: "userProfileImageRequest"
};

// individual
function* profileActionSaga(action) {
  try {
    const { data/*, history*/ } = action.payload;
    yield put(
      setLoading({
        request: settingRequest.individualProfileRequest,
        loading: true
      })
    );
    const response = yield call(settingService.individualProfileSetting, data);
    yield put(setLoading({ request: settingRequest.individualProfileRequest }));
    if (response.data.status.code === 100) {
      yield put(updateUserData(response.data.entity.user));
      yield put({
        type: INDIVIDUAL_SETTING_SUCCESS,
        payload: response.data.status
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: settingRequest.individualProfileRequest,
          success: true
        })
      );
    } else {
      yield put({
        type: INDIVIDUAL_SETTING_ERROR,
        payload: response.data.status
      });
      yield put(
        setLoading({ request: settingRequest.individualProfileRequest })
      );
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: settingRequest.individualProfileRequest,
          success: false
        })
      );
    }
  } catch (error) {
    yield put(setLoading({}));
    yield put(
      showRequestFeedBack({
        message: "An error occured! Try again",
        for: settingRequest.individualProfileRequest,
        success: false
      })
    );
    yield put({
      type: INDIVIDUAL_SETTING_ERROR,
      payload: error
    });
  }
}

function* profileEmailActionSaga(action) {
  try {
    const { data/*, history*/ } = action.payload;
    yield put(
      setLoading({ request: settingRequest.individualEmailSettingRequest })
    );
    const response = yield call(settingService.individualEmailSetting, data);
    yield put(setLoading({}));
    if (response.data.status.code === 100) {
      yield put(updateUserData(response.data.entity.user));
      yield put({
        type: INDIVIDUAL_EMAIL_SETTING_SUCCESS,
        payload: response.data.status
      });
      yield put(setUserData(response.data.entity));
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: settingRequest.individualEmailSettingRequest,
          success: true
        })
      );
    } else {
      yield put({
        type: INDIVIDUAL_EMAIL_SETTING_ERROR,
        payload: response.data.status
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: settingRequest.individualEmailSettingRequest,
          success: false
        })
      );
    }
  } catch (error) {
    yield put(setLoading({}));
    yield put(
      showRequestFeedBack({
        message: "An error occured! Try again",
        for: settingRequest.individualEmailSettingRequest,
        success: false
      })
    );
    yield put({
      type: INDIVIDUAL_EMAIL_SETTING_ERROR,
      payload: error
    });
  }
}

function* profilePasswordActionSaga(action) {
  try {
    const { data/*, history*/ } = action.payload;
    yield put(
      setLoading({ request: settingRequest.individualPasswordSettingRequest })
    );
    const response = yield call(settingService.individualPasswordSetting, data);
    yield put(setLoading({}));
    if (response.data.status.code === 100) {
      yield put(updateUserData(response.data.entity.user));
      yield put({
        type: INDIVIDUAL_PASSWORD_SETTING_SUCCESS,
        payload: response.data.status
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: settingRequest.individualPasswordSettingRequest,
          success: true
        })
      );
    } else {
      yield put({
        type: INDIVIDUAL_PASSWORD_SETTING_ERROR,
        payload: response.data.status
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: settingRequest.individualPasswordSettingRequest,
          success: false
        })
      );
    }
  } catch (error) {
    yield put(setLoading({}));
    yield put({
      type: INDIVIDUAL_PASSWORD_SETTING_ERROR,
      payload: error
    });
    yield put(
      showRequestFeedBack({
        message: "An erro occured! Try again",
        for: settingRequest.individualPasswordSettingRequest,
        success: false
      })
    );
  }
}

// function* profileImageActionSaga(action) {
//   try {
//     const { data, history } = action.payload;
//     yield put(setLoading({ request: settingRequest.userProfileImageRequest }));
//     const response = yield call(authService.signupUser, data);
//     yield put(setLoading({}));
//     if (response.data.status.code === 100) {
//       yield put(updateUserData(response.data.entity.user));
//       yield put({
//         type: USER_PROFILE_IMAGE_SUCCESS,
//         payload: response.data.status
//       });
//       history.push("/");
//     } else {
//       yield put({
//         type: USER_PROFILE_IMAGE_ERROR,
//         payload: response.data.status
//       });
//     }
//   } catch (error) {
//     yield put(setLoading({}));
//     yield put({
//       type: USER_PROFILE_IMAGE_ERROR,
//       payload: error
//     });
//   }
// }

// organisation

function* organisationProfileActionSaga(action) {
  try {
    const { data, history } = action.payload;
    yield put(
      setLoading({ request: settingRequest.organisationProfileRequest })
    );
    const response = yield call(
      settingService.organisationProfileRequest,
      data
    );
    yield put(setLoading({}));
    if (response.data.status.code === 100) {
      yield put(updateUserData(response.data.entity.user));
      yield put({
        type: ORGANISATION_SETTING_SUCCESS,
        payload: response.data.status
      });
      history.push("/");
    } else {
      yield put({
        type: ORGANISATION_SETTING_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(setLoading({}));
    yield put({
      type: ORGANISATION_SETTING_ERROR,
      payload: error
    });
  }
}

function* organisationProfileEmailActionSaga(action) {
  try {
    const { data, history } = action.payload;
    yield put(
      setLoading({ request: settingRequest.organisationEmailSettingRequest })
    );
    const response = yield call(
      settingService.organisationEmailSettingRequest,
      data
    );
    yield put(setLoading({}));
    if (response.data.status.code === 100) {
      yield put(updateUserData(response.data.entity.user));
      yield put({
        type: ORGANISATION_EMAIL_SETTING_SUCCESS,
        payload: response.data.status
      });
      history.push("/");
    } else {
      yield put({
        type: ORGANISATION_EMAIL_SETTING_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(setLoading({}));
    yield put({
      type: ORGANISATION_EMAIL_SETTING_ERROR,
      payload: error
    });
  }
}

function* organisationProfilePasswordActionSaga(action) {
  try {
    const { data, history } = action.payload;
    yield put(
      setLoading({ request: settingRequest.organisationPasswordSettingRequest })
    );
    const response = yield call(
      settingService.organisationPasswordSettingRequest,
      data
    );
    yield put(setLoading({}));
    if (response.data.status.code === 100) {
      yield put(updateUserData(response.data.entity.user));
      yield put({
        type: ORGANISATION_PASSWORD_SETTING_SUCCESS,
        payload: response.data.status
      });
      history.push("/");
    } else {
      yield put({
        type: ORGANISATION_PASSWORD_SETTING_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(setLoading({}));
    yield put({
      type: ORGANISATION_PASSWORD_SETTING_ERROR,
      payload: error
    });
  }
}

function* profileActionWatcher() {
  yield takeLatest(INDIVIDUAL_SETTING, profileActionSaga);
}

function* profileEmailActionWatcher() {
  yield takeLatest(INDIVIDUAL_EMAIL_SETTING, profileEmailActionSaga);
}

function* profilePasswordActionWatcher() {
  yield takeLatest(INDIVIDUAL_PASSWORD_SETTING, profilePasswordActionSaga);
}

function* organisationProfileActionWatcher() {
  yield takeLatest(ORGANISATION_SETTING, organisationProfileActionSaga);
}

function* organisationProfileEmailActionWatcher() {
  yield takeLatest(
    ORGANISATION_EMAIL_SETTING,
    organisationProfileEmailActionSaga
  );
}

function* organisationProfilePasswordActionWatcher() {
  yield takeLatest(
    ORGANISATION_PASSWORD_SETTING,
    organisationProfilePasswordActionSaga
  );
}

export default function* settingsSaga() {
  yield all([
    profileActionWatcher(),
    profileEmailActionWatcher(),
    profilePasswordActionWatcher(),
    organisationProfileActionWatcher(),
    organisationProfileEmailActionWatcher(),
    organisationProfilePasswordActionWatcher()
  ]);
}
