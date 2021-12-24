import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import variablesActions from "./variables-actions";

const initialState = {
  entities: "",
  error: null,
  isLoading: false,
};

const entities = createReducer(initialState.entities, {
  [variablesActions.fetchVariablesSuccess]: (_, { payload }) => payload,
});

const error = createReducer(initialState.error, {
  [variablesActions.fetchVariablesRequest]: () => null,
  [variablesActions.fetchVariablesSuccess]: () => null,
  [variablesActions.fetchVariablesError]: (_, { payload }) => payload,
});

const isLoading = createReducer(initialState.isLoading, {
  [variablesActions.fetchVariablesRequest]: () => true,
  [variablesActions.fetchVariablesSuccess]: () => false,
  [variablesActions.fetchVariablesError]: () => false,
});

export default combineReducers({
  entities,
  error,
  isLoading,
});
