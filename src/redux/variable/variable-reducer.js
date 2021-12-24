import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import variableActions from "./variable-actions";

const initialState = {
  entity: "",
  error: null,
  isLoading: false,
};

const entity = createReducer(initialState.entity, {
  [variableActions.fetchVariableByIdSuccess]: (_, { payload }) => payload,
});

const error = createReducer(initialState.error, {
  [variableActions.fetchVariableByIdRequest]: () => null,
  [variableActions.fetchVariableByIdSuccess]: () => null,
  [variableActions.fetchVariableByIdError]: (_, { payload }) => payload,
});

const isLoading = createReducer(initialState.isLoading, {
  [variableActions.fetchVariableByIdRequest]: () => true,
  [variableActions.fetchVariableByIdSuccess]: () => false,
  [variableActions.fetchVariableByIdError]: () => false,
});

export default combineReducers({
  entity,
  error,
  isLoading,
});
