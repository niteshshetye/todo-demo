import { all } from "redux-saga/effects";
import { todoRequestedWatcher } from "./todo/worker";

export function* rootSaga() {
  yield all([todoRequestedWatcher()]);
}
