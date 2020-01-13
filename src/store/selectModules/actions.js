import axios from "axios";

export const ORGANISATION_CATEGORY = "ORGANISATION_CATEGORY";

export const fetchOrganisationCategory = category => {
  return {
    type: ORGANISATION_CATEGORY,
    category
  };
};

export const organisationCategory = () => {
  return dispatch => {
    return axios
      .get("https://services.elta.com.ng/ajo/api/v2/misc/categories")
      .then(res => {
        console.log(res.data);
        dispatch(fetchOrganisationCategory(res.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
