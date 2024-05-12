import { ITodoState, Status, todoTypes } from "./types";

const initialState = {
  status: Status.IDLE,
  todos: [],
};

export const todoReducer = (
  state: ITodoState = initialState,
  action: any
): ITodoState => {
  switch (action.type) {
    case todoTypes.TODO_REQUESTED: {
      return {
        ...state,
        status: Status.LOADING,
      };
    }

    case todoTypes.TODO_SUCCESS: {
      return {
        ...state,
        status: Status.IDLE,
        todos: action.payload,
      };
    }

    case todoTypes.TODO_FAILED: {
      return {
        ...state,
        status: Status.ERROR,
        todos: [],
      };
    }

    default:
      return state;
  }
};
