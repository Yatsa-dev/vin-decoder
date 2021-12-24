import { createAction } from "@reduxjs/toolkit";

const fetchVariablesRequest = createAction("variables/fetchVariablesRequest");
const fetchVariablesSuccess = createAction("variables/fetchVariablesSuccess");
const fetchVariablesError = createAction("variables/fetchVariablesError");

const variablesActions = {
  fetchVariablesRequest,
  fetchVariablesSuccess,
  fetchVariablesError,
};

export default variablesActions;
