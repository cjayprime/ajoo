export const FETCH_STATES = "FETCH_STATES";
export const FETCH_STATES_ERROR = "FETCH_STATES_ERROR";
export const FETCH_STATES_SUCCESS = "FETCH_STATES_SUCCESS";

export const FETCH_LGA = "FETCH_LGA";
export const FETCH_LGA_ERROR = "FETCH_LGA_ERROR";
export const FETCH_LGA_SUCCESS = "FETCH_LGA_SUCCESS";

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";

export const FETCH_ORG_TYPES = "FETCH_ORG_TYPES";
export const FETCH_ORG_TYPES_ERROR = "FETCH_ORG_TYPES_ERROR";
export const FETCH_ORG_TYPES_SUCCESS = "FETCH_ORG_TYPES_SUCCESS";

export const fetchStates = data => ({
  type: FETCH_STATES,
  payload: data
});

export const fetchLga = data => ({
  type: FETCH_LGA,
  payload: data
});

export const fetchCategories = data => ({
  type: FETCH_CATEGORIES,
  payload: data
});

export const fetchOrgTypes = data => ({
  type: FETCH_ORG_TYPES,
  payload: data
});