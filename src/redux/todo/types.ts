export type TodoRequested = () => {
  type: string;
};

export type TodoSuccess = (payload: any) => {
  type: string;
  payload: any;
};

export type TodoFailed = () => {
  type: string;
};

export enum Status {
  IDLE,
  LOADING,
  ERROR,
}

export interface ITodos {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoState {
  status: Status;
  todos: ITodos[];
}

const TODO_REQUESTED = "Todo requested";
const TODO_SUCCESS = "Todo success";
const TODO_FAILED = "Todo failed";

export const todoTypes = {
  TODO_REQUESTED,
  TODO_SUCCESS,
  TODO_FAILED,
};
