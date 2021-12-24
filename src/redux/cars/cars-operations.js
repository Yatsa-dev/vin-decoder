import axios from 'axios';
import carsActions from './cars-actions';

axios.defaults.baseURL = 'https://vpic.nhtsa.dot.gov/api/';

const fetchByVin = (vin) => async (dispatch) => {
  dispatch(carsActions.fetchCarInfoByVinRequest());

  try {
    const { data } = await axios.get(`vehicles/DecodeVin/${vin}?format=json`);
    const { Results } = data;

    dispatch(carsActions.fetchCarInfoByVinSuccess(Results));
  } catch (error) {
    dispatch(carsActions.fetchCarInfoByVinError(error));
  }
};

const listMostRecentDecoded = (vins) => async (dispatch) => {
  dispatch(carsActions.listMostRecentDecodedRequest());

  try {
    dispatch(carsActions.listMostRecentDecodedSuccess(vins));
  } catch (error) {
    dispatch(carsActions.listMostRecentDecodedError(error));
  }
};

const carsOperations = { fetchByVin, listMostRecentDecoded };

export default carsOperations;
