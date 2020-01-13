import { put, takeLatest, call, all } from "redux-saga/effects";

import authService from "../../services/authServices";
import {
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_ORG,
  SIGNUP_ORG_SUCCESS,
  SIGNUP_ORG_ERROR,
  setUserData,
  UPLOAD_PROFILE_IMAGE,
  UPLOAD_PROFILE_IMAGE_SUCCESS,
  UPLOAD_PROFILE_IMAGE_ERROR,
  SIGNOUT,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
  VERIFY_EMAIL,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_ERROR
} from "./actions";
import { setLoading, showRequestFeedBack } from "../utilsModule/actions";
//import auth from "./reducer";

export const authRequest = {
  loginRequest: "loginRequest",
  signupRequest: "signupRequest",
  signupOrgRequest: "signupOrgRequest",
  signoutRequest: "signoutRequest",
  uploadProfileImageRequest: "uploadProfileImageRequest",
  verifyEmailRequest: "verifyEmailRequest"
};

function* signinActionSaga(action) {
  try {
    const { data, history } = action.payload;

    yield put(setLoading({ request: authRequest.loginRequest, loading: true }));
    yield put(showRequestFeedBack({}));
    const response = yield call(authService.signinUser, data);

    yield put(setLoading({ request: authRequest.loginRequest }));
    
    /*if (response.data.status.code === 100) {
      if (response.data.entity.user.verified === 0) {
        yield put(
          setUserData({ first_name: response.data.entity.user.first_name })
        );
      } else {
        yield put(setUserData(response.data.entity.user));
      }

      yield put({
        type: SIGNIN_SUCCESS,
        payload: response.data.status
      });
      if (response.data.entity.user.verified === 0) {
        return history.push("/send_email");
      }
      if (!response.data.entity.user.image_url) {
        history.push("/upload_profile_photo");
      } else {
        history.push("/profile");
      }
    
    }*/
    console.log('Response: ', response.data)
    if (response.data.status.code === 109) {

      yield put({
        type: SIGNIN_ERROR,
        payload: response.data.status
      });
      history.push("/send_email");
      //window.location = window.location.origin + "/send_email";

    } else if (typeof response.data.entity.user !== "undefined" && ! response.data.entity.user.image_url) {
      
      yield put(setUserData(response.data.entity.user));
      yield call(authService.setToken, response.data.entity.token);
      yield put({
        type: SIGNIN_SUCCESS,
        payload: response.data.status
      });
      history.push("/upload_profile_photo");
      //window.location = window.location.origin + "/upload_profile_photo";

    } else if(response.data.status.code === 100){

      yield put(setUserData(response.data.entity.user));
      yield call(authService.setToken, response.data.entity.token);
      yield put({
        type: SIGNIN_SUCCESS,
        payload: response.data.status
      });
      history.push("/profile");
      //window.location = window.location.origin + "/profile";

    } else {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: authRequest.loginRequest,
          success: false
        })
      );
      yield put({
        type: SIGNIN_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      showRequestFeedBack({
        message: "An error occured! Try again",
        for: authRequest.loginRequest,
        success: false
      })
    );
    yield put(setLoading({ request: authRequest.loginRequest }));
    yield put({
      type: SIGNIN_ERROR,
      payload: error
    });
  }
}

function* signupActionSaga(action) {
  try {
    const { data, history } = action.payload;
    yield put(
      setLoading({ request: authRequest.signupRequest, loading: true })
    );
    const response = yield call(authService.signupUser, data);

    yield put(setLoading({ request: authRequest.signupRequest }));
    if (response.data.status.code === 100) {
      const { first_name, last_name } = response.data.entity.user;
      yield put(setUserData({ first_name, last_name }));
      yield put({
        type: SIGNUP_SUCCESS,
        payload: response.data.status
      });
      history.push("/send_email");
    } else {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: authRequest.signupRequest,
          success: false
        })
      );
      yield put({
        type: SIGNUP_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(setLoading({ request: authRequest.signupRequest }));
    yield put(
      showRequestFeedBack({
        message: "An error occure. Try again",
        for: authRequest.signupRequest,
        success: false
      })
    );
    yield put({
      type: SIGNUP_ERROR,
      payload: error
    });
  }
}

function* uploadProfileImageActionSaga(action) {
  try {
    const { data, history, showPercentageProgress } = action.payload;

    yield put(showPercentageProgress(0));
    yield put(
      setLoading({
        request: authRequest.uploadProfileImageRequest,
        loading: true
      })
    );
    const response = yield call(
      authService.uploadProfileImage,
      data,
      showPercentageProgress
    );
    yield put(
      setLoading({
        request: authRequest.uploadProfileImageRequest,
        loading: false
      })
    );
    if (response.data.status.code === 100) {
      yield put({
        type: UPLOAD_PROFILE_IMAGE_SUCCESS,
        payload: response.data.status
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: authRequest.uploadProfileImageRequest,
          success: true
        })
      );
      setTimeout(() => {
        if (history) history.push("/profile");
      }, 2000);
    } else {
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: authRequest.uploadProfileImageRequest,
          success: false
        })
      );
      yield put({
        type: UPLOAD_PROFILE_IMAGE_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(
      setLoading({
        request: authRequest.uploadProfileImageRequest,
        loading: false
      })
    );
    yield put({
      type: UPLOAD_PROFILE_IMAGE_ERROR,
      payload: error
    });
    yield put(
      showRequestFeedBack({
        message: "An error occured uploading profile image",
        for: authRequest.uploadProfileImageRequest,
        success: false
      })
    );
  }
}

function* signuporgActionSaga(action) {
  try {
    const { data, history } = action.payload;
    yield put(
      setLoading({ request: authRequest.signupOrgRequest, loading: true })
    );
    const response = yield call(authService.signupOrg, data);
    yield put(setLoading({ request: authRequest.signupOrgRequest }));
    if (response.data.status.code === 100) {
      //yield put(setUserData(response.data.entity.user));
      yield put({
        type: SIGNUP_ORG_SUCCESS,
        payload: response.data.status
      });
      if (response.data.entity.user.verified === 0) {
        return history.push("/send_email");
      }
      if (!response.data.entity.user.image_url) {
        history.push("/upload_profile_photo");
      } else {
        history.push("/profile");
      }
    } else {
      yield put({
        type: SIGNUP_ORG_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(setLoading({ request: authRequest.signupOrgRequest }));
    yield put({
      type: SIGNUP_ORG_ERROR,
      payload: error
    });
  }
}

function* signoutActionSaga(action) {
  try {
    const { history } = action.payload;
    yield put(
      setLoading({ request: authRequest.signoutRequest, loading: true })
    );
    const response = yield call(authService.signoutUser);
    yield put(setLoading({ request: authRequest.signoutRequest }));
    if (response.status.code === 100) {
      history.push("/");
      yield put(setUserData({}));
      yield put({
        type: SIGNOUT_SUCCESS,
        payload: response.entity
      });
    } else {
      yield put({
        type: SIGNOUT_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(setLoading({ request: authRequest.signoutRequest }));
    yield put({
      type: SIGNOUT_ERROR,
      payload: error
    });
  }
}

function* verifyEmailSaga(action) {
  try {
    const { token } = action.payload;
    yield put(
      setLoading({ request: authRequest.verifyEmailRequest, loading: true })
    );
    
    const response = yield call(authService.verifyEmail, token);
    yield put(setLoading({ request: authRequest.verifyEmailRequest }));
    
    if (response.data.status.code === 100) {
      yield put({
        type: VERIFY_EMAIL_SUCCESS,
        payload: response.data.status
      });
    } else {
      yield put({
        type: VERIFY_EMAIL_ERROR,
        payload: response.data.status
      });
    }
  } catch (error) {
    yield put(setLoading({ request: authRequest.verifyEmailRequest }));
    yield put({
      type: VERIFY_EMAIL_ERROR,
      payload: error
    });
  }
}

function* signinActionWatcher() {
  yield takeLatest(SIGNIN, signinActionSaga);
}

function* signupActionWatcher() {
  yield takeLatest(SIGNUP, signupActionSaga);
}

function* uploadProfileImageWatcher() {
  yield takeLatest(UPLOAD_PROFILE_IMAGE, uploadProfileImageActionSaga);
}

function* signuporgActionWatcher() {
  yield takeLatest(SIGNUP_ORG, signuporgActionSaga);
}

function* signoutActionWatcher() {
  yield takeLatest(SIGNOUT, signoutActionSaga);
}

function* verifyEmailWatcher() {
  yield takeLatest(VERIFY_EMAIL, verifyEmailSaga);
}

export default function* authsSaga() {
  yield all([
    signinActionWatcher(),
    signupActionWatcher(),
    uploadProfileImageWatcher(),
    signuporgActionWatcher(),
    signoutActionWatcher(),
    verifyEmailWatcher()
  ]);
}
