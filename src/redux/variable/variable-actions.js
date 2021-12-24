import { createAction } from "@reduxjs/toolkit";

const fetchVariableByIdRequest = createAction(
  "variables/fetchVariableByIdRequest"
);
const fetchVariableByIdSuccess = createAction(
  "variables/fetchVariableByIdSuccess"
);
const fetchVariableByIdError = createAction("variables/fetchVariableByIdError");

const variableActions = {
  fetchVariableByIdRequest,
  fetchVariableByIdSuccess,
  fetchVariableByIdError,
};

export default variableActions;
