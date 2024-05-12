import { AxiosResponse } from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { todoTypes } from "./types";
import { todoActions } from "./actions";
import { todoClient } from "../../middelware/interceptor";

function* todoRequestedWorker() {
  try {
    const response: AxiosResponse = yield todoClient.get("/todos");
    yield put(todoActions.todoSuccess(response.data));
  } catch (error) {
    yield put(todoActions.todoFailed());
  }
}

export function* todoRequestedWatcher() {
  yield takeEvery(todoTypes.TODO_REQUESTED, todoRequestedWorker);
}
