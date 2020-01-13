import { setLoading } from "../utilsModule/actions";

export const VERIFY_VOLUNTEER_IMAGE = "VERIFY_VOLUNTEER_IMAGE";

export const VERIFY_SIGNUP = "VERIFY_SIGNUP";

export const verifyRequest = {
  verifyVolunteerImageRequest: "verifyVolunteerImageRequest",
  verifySignupRequest: "verifySignupRequest"
};

export const volunteerImageUser = () => dispatch => {
  dispatch(
    setLoading({
      loading: true,
      request: verifyRequest.verifyVolunteerImageRequest
    })
  );

  // perform async operations here, and dispatch a success or error action
  setTimeout(() => {
    dispatch({
      type: VERIFY_VOLUNTEER_IMAGE
    });
    dispatch(setLoading({}));
  }, 3000);
};

export const verifySignupUser = () => dispatch => {
  dispatch(
    setLoading({
      loading: true,
      request: verifyRequest.verifySignupRequest
    })
  );

  // perform async operations here, and dispatch a success or error action
  setTimeout(() => {
    dispatch({
      type: VERIFY_SIGNUP
    });
    dispatch(setLoading({}));
  }, 3000);
};
