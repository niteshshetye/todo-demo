import { TodoFailed, TodoRequested, TodoSuccess, todoTypes } from "./types";

const todoRequested: TodoRequested = () => {
  return {
    type: todoTypes.TODO_REQUESTED,
  };
};

const todoSuccess: TodoSuccess = (payload: any) => {
  return {
    type: todoTypes.TODO_SUCCESS,
    payload,
  };
};

const todoFailed: TodoFailed = () => {
  return {
    type: todoTypes.TODO_FAILED,
  };
};

export const todoActions = {
  todoRequested,
  todoSuccess,
  todoFailed,
};
