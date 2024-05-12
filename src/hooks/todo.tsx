import { useDispatch, useSelector } from "react-redux";
import { RootSate } from "../redux/store";
import { useEffect } from "react";
import { todoActions } from "../redux/todo/actions";
import { ITodos, Status } from "../redux/todo/types";

export type UseTodos = () => {
  todos: ITodos[];
  status: Status;
};

export const useTodos: UseTodos = () => {
  const { todos, status } = useSelector((state: RootSate) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoActions.todoRequested());
  }, [dispatch]);

  return {
    todos,
    status,
  };
};
