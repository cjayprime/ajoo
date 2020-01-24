import { put, takeLatest, call, all } from "redux-saga/effects";

import miscService from "../../services/miscService";
import {
  FETCH_STATES,
  FETCH_STATES_SUCCESS,
  FETCH_STATES_ERROR,
  FETCH_LGA,
  FETCH_LGA_SUCCESS,
  FETCH_LGA_ERROR,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
  FETCH_ORG_TYPES,
  FETCH_ORG_TYPES_SUCCESS,
  FETCH_ORG_TYPES_ERROR,
  HELP_SUPPORT,
  HELP_SUPPORT_SUCCESS,
  HELP_SUPPORT_ERROR,
} from "./actions";
import { setLoading, showRequestFeedBack } from "../utilsModule/actions";

export const miscRequest = {
  fetchStateRequest: "fetchStateRequest",
  fetchLgaRequest: "fetchLgaRequest",
  fetchCategoriesRequest: "fetchCategoriesRequest",
  fetchCampaignTypesRequest: "fetchCampaignTypesRequest",
  helpSupportRequest: "helpSupportRequest"
};

function* fetchStatesActionSaga(action) {
  try {
    const { data } = action.payload;
    yield put(
      setLoading({ request: miscRequest.fetchStateRequest, loading: true })
    );
    const response = yield call(miscService.fetchState, data);
    yield put(setLoading({ request: miscRequest.fetchStateRequest }));
    if (response.status.code === 100) {
      yield put({
        type: FETCH_STATES_SUCCESS,
        payload: {
          status: response.status,
          data: response.entity.states
        }
      });
    } else {
      yield put({
        type: FETCH_STATES_ERROR,
        payload: response.status
      });
    }
  } catch (error) {
    yield put(setLoading({ request: miscRequest.fetchStateRequest }));
    yield put({
      type: FETCH_STATES_ERROR,
      payload: error
    });
  }
}

function* fetchLgaActionSaga(action) {
  try {
    const { stateId } = action.payload;
    yield put(
      setLoading({ request: miscRequest.fetchLgaRequest, loading: true })
    );
    const response = yield call(miscService.fetchLga, stateId);
    yield put(setLoading({ request: miscRequest.fetchLgaRequest }));
    if (response.status.code === 100) {
      yield put({
        type: FETCH_LGA_SUCCESS,
        payload: {
          status: response.status,
          data: response.entity.cities
        }
      });
    } else {
      yield put({
        type: FETCH_LGA_ERROR,
        payload: response.status
      });
    }
  } catch (error) {
    yield put(setLoading({ request: miscRequest.fetchLgaRequest }));
    yield put({
      type: FETCH_LGA_ERROR,
      payload: error
    });
  }
}

function* fetchCategoriesActionSaga(action) {
  try {
    yield put(setLoading({ request: miscRequest.fetchCategoriesRequest }));
    const response = yield call(miscService.fetchCategories);
    yield put(setLoading({}));
    if (response.status.code === 100) {
      yield put({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: {
          status: response.status,
          data: response.entity
        }
      });
    } else {
      yield put({
        type: FETCH_CATEGORIES_ERROR,
        payload: response.status
      });
    }
  } catch (error) {
    yield put(setLoading({}));
    yield put({
      type: FETCH_CATEGORIES_ERROR,
      payload: error
    });
  }
}

function* fetchCampaignTypesActionSaga(action) {
  try {
    yield put(setLoading({ request: miscRequest.fetchCampaignTypesRequest }));
    const response = yield call(miscService.fetchCampaignTypes);
    yield put(setLoading({}));
    if (response.status.code === 100) {
      yield put({
        type: FETCH_ORG_TYPES_SUCCESS,
        payload: {
          status: response.status,
          data: response.entity
        }
      });
    } else {
      yield put({
        type: FETCH_ORG_TYPES_ERROR,
        payload: response.status
      });
    }
  } catch (error) {
    yield put(setLoading({}));
    yield put({
      type: FETCH_ORG_TYPES_ERROR,
      payload: error
    });
  }
}

function* helpSupportActionSaga(action) {
  try {
    const { data, history } = action.payload;
    yield put(
      setLoading({ request: miscRequest.helpSupportRequest, loading: true })
    );
    const response = yield call(miscService.helpSupport, data);
    yield put(setLoading({ request: miscRequest.helpSupportRequest }));
    if (response.data.status.code === 100) {
      yield put({
        type: HELP_SUPPORT_SUCCESS,
        payload: {
          status: response.data.status,
          data: response.data.entity
        }
      });
      setTimeout(() => {
        if (history) history.push("/support_sent");
      }, 2000)
    } else {
      yield put({
        type: HELP_SUPPORT_ERROR,
        payload: response.data.status
      });
      yield put(
        showRequestFeedBack({
          message: response.data.status.desc,
          for: miscRequest.helpSupportRequest,
          success: false
        })
      );

    }
  } catch (error) {

    yield put(setLoading({ request: miscRequest.helpSupportRequest }));
    yield put(
      showRequestFeedBack({
        message: "An error occured! Try again",
        for: miscRequest.helpSupportRequest,
        success: false
      })
    );
    yield put({
      type: HELP_SUPPORT_ERROR,
      payload: error
    })
  }
}

function* fetchStatesActionWatcher() {
  yield takeLatest(FETCH_STATES, fetchStatesActionSaga);
}

function* fetchLgaActionWatcher() {
  yield takeLatest(FETCH_LGA, fetchLgaActionSaga);
}

function* fetchCategoriesActionWatcher() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategoriesActionSaga);
}

function* fetchCampaignTypesActionWatcher() {
  yield takeLatest(FETCH_ORG_TYPES, fetchCampaignTypesActionSaga);
}

function* helpSupportActionWatcher() {
  yield takeLatest(HELP_SUPPORT, helpSupportActionSaga);
}

export default function* miscSaga() {
  yield all([
    fetchStatesActionWatcher(),
    fetchLgaActionWatcher(),
    fetchCategoriesActionWatcher(),
    fetchCampaignTypesActionWatcher(),
    helpSupportActionWatcher()
  ]);
}
