import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";
import { rootReducer } from "./rootReducer";

const sagaMiddelware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddelware),
});

export type RootSate = ReturnType<typeof store.getState>;

sagaMiddelware.run(rootSaga);
