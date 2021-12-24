import { createAction } from "@reduxjs/toolkit";

const fetchCarInfoByVinRequest = createAction("car/fetchCarInfoByVinRequest");
const fetchCarInfoByVinSuccess = createAction("car/fetchCarInfoByVinSuccess");
const fetchCarInfoByVinError = createAction("car/fetchCarInfoByVinError");

const listMostRecentDecodedRequest = createAction(
  "vinList/listMostRecentDecodedRequest"
);
const listMostRecentDecodedSuccess = createAction(
  "vinList/listMostRecentDecodedSuccess"
);
const listMostRecentDecodedError = createAction(
  "vinList/listMostRecentDecodedError"
);

const carsActions = {
  fetchCarInfoByVinRequest,
  fetchCarInfoByVinSuccess,
  fetchCarInfoByVinError,
  listMostRecentDecodedRequest,
  listMostRecentDecodedSuccess,
  listMostRecentDecodedError,
};

export default carsActions;
