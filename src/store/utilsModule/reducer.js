import {
  ASYNC_LOADING,
  REQUEST_FEEDBACK,
  FILE_UPLOAD_PROGRESS,
  OPEN_MODAL
} from "./actions";

const initialState = {
  request: [],
  feedback: {
    message: "",
    for: "",
    success: true
  },
  fileUploadProgress: null,
  openModal: ""
};

function asyncLoading(request, payload) {
  let exist = request.findIndex(el => el === payload.request) !== -1;
  if (payload.loading) {
    if (exist) return request;
    return [...request, payload.request];
  } else {
    if (!exist) return request;
    return request.filter(el => el !== payload.request);
  }
}

const utils = function(state = initialState, action) {
  switch (action.type) {
    case ASYNC_LOADING:
      return {
        ...state,
        request: asyncLoading(state.request, action.payload)
      };
    case REQUEST_FEEDBACK:
      return {
        ...state,
        feedback: action.payload
      };
    case FILE_UPLOAD_PROGRESS:
      return {
        ...state,
        fileUploadProgress: action.payload
      };
    case OPEN_MODAL:
      return {
        ...state,
        openModal: action.payload
      };
    default:
      return state;
  }
};

export default utils;
