import { setLoading } from "../utilsModule/actions";

export const CONFIRM_SUCCESS = "CONFIRM_SUCCESS";

export const confirmRequest = {
  confirmationRequest: "confirmationRequest"
};

export const confirmUser = () => dispatch => {
  // dispatch(
  //   setLoading({ loading: true, request: confirmRequest.confirmationRequest })
  // );

  // perform async operations here, and dispatch a success or error action
  setTimeout(() => {
    dispatch({
      type: CONFIRM_SUCCESS
    });
    // dispatch(setLoading({}));
  }, 3000);
};
