import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { carsReducer } from "./cars";
import { variablesReducer } from "./variables";
import { variableReducer } from "./variable";

const carsPersistConfig = {
  key: "car",
  storage,
};

export const store = configureStore({
  reducer: {
    car: persistReducer(carsPersistConfig, carsReducer),
    variables: variablesReducer,
    variable: variableReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
