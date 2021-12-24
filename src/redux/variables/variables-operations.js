import axios from "axios";
import variablesActions from "./variables-actions";

const getVariables = () => async (dispatch) => {
  dispatch(variablesActions.fetchVariablesRequest());

  try {
    const { data } = await axios.get(
      "vehicles/getvehiclevariablelist?format=json"
    );
    const { Results } = data;

    dispatch(variablesActions.fetchVariablesSuccess(Results));
  } catch (error) {
    dispatch(variablesActions.fetchVariablesError(error));
  }
};

const variablesOperations = { getVariables };

export default variablesOperations;
