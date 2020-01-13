import { CONFIRM_SUCCESS } from "./actions";

const initialState = {
  success: false
};

const confirm = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_SUCCESS:
      return {
        ...state,
        success: true
      };

    default:
      return state;
  }
};

export default confirm;
