import { useTodos, Status, ITodos } from "../library";

export const Todo = () => {
  const { todos, status } = useTodos();

  if (status === Status.ERROR) return <div>Something went wrong!</div>;

  if (status === Status.LOADING) return <div>Please Wait Loading...</div>;

  return (
    <div className="App">
      {todos.map((todo: ITodos) => {
        return (
          <div>
            <h1>{todo.title}</h1>
          </div>
        );
      })}
    </div>
  );
};
