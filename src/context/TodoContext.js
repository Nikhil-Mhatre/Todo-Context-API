import { createContext, useContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      message: "This is Dummy Todo",
      completed: false,
    },
  ],
  addNewTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  toggleComplete: () => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  useContext(TodoContext);
};
