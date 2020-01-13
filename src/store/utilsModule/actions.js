export const ASYNC_LOADING = "ASYNC_LOADING";
export const REQUEST_FEEDBACK = "REQUEST_FEEDBACK";
export const FILE_UPLOAD_PROGRESS = "FILE_UPLOAD_PROGRESS";
export const OPEN_MODAL = "OPEN_MODAL";

export const modalOptions = {
  paystackPaymentModal: "paystackPaymentModal",
  initiatePaymentModal: "initiatePaymentModal"
};

export const setLoading = ({ request = "", loading = false }) => ({
  type: ASYNC_LOADING,
  payload: { request, loading }
});

export const showRequestFeedBack = feedbackProps => ({
  type: REQUEST_FEEDBACK,
  payload: feedbackProps
});

export const showPercentageProgress = percentageProgress => ({
  type: FILE_UPLOAD_PROGRESS,
  payload: percentageProgress
});

export const openModalAction = (modal = "") => {
  return { type: OPEN_MODAL, payload: modal };
};
