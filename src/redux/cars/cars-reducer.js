import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import carsActions from "./cars-actions";

const initialState = {
  entities: "",
  error: null,
  isLoading: false,
  lastRequests: [],
};

const entities = createReducer(initialState.entities, {
  [carsActions.fetchCarInfoByVinSuccess]: (_, { payload }) => payload,
});

const lastRequests = createReducer(initialState.lastRequests, {
  [carsActions.listMostRecentDecodedSuccess]: (_, { payload }) => payload,
});

const error = createReducer(initialState.error, {
  [carsActions.fetchCarInfoByVinRequest]: () => null,
  [carsActions.fetchCarInfoByVinSuccess]: () => null,
  [carsActions.fetchCarInfoByVinError]: (_, { payload }) => payload,

  [carsActions.listMostRecentDecodedRequest]: () => null,
  [carsActions.listMostRecentDecodedSuccess]: () => null,
  [carsActions.listMostRecentDecodedError]: (_, { payload }) => payload,
});

const isLoading = createReducer(initialState.isLoading, {
  [carsActions.fetchCarInfoByVinRequest]: () => true,
  [carsActions.fetchCarInfoByVinSuccess]: () => false,
  [carsActions.fetchCarInfoByVinError]: () => false,

  [carsActions.listMostRecentDecodedRequest]: () => true,
  [carsActions.listMostRecentDecodedSuccess]: () => false,
  [carsActions.listMostRecentDecodedError]: () => false,
});

export default combineReducers({
  entities,
  error,
  isLoading,
  lastRequests,
});
