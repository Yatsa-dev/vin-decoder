const getVariables = (state) => state.variables.entities;
const isLoading = (state) => state.variables.isLoading;
const getError = (state) => state.variables.error;

const variablesSelectors = {
  getVariables,
  isLoading,
  getError,
};

export default variablesSelectors;
