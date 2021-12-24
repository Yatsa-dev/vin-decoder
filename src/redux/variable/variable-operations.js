import axios from "axios";
import variableActions from "./variable-actions";

const fetchVariableById = (variableId) => async (dispatch) => {
  dispatch(variableActions.fetchVariableByIdRequest());

  try {
    const { data } = await axios.get(
      "vehicles/getvehiclevariablelist?format=json"
    );
    const { Results } = data;
    const variableInfo = Results.find(({ ID }) => Number(variableId) === ID);
    dispatch(variableActions.fetchVariableByIdSuccess(variableInfo));
  } catch (error) {
    dispatch(variableActions.fetchVariableByIdError(error));
  }
};

const variableOperations = { fetchVariableById };

export default variableOperations;
