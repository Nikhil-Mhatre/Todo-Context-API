import { useTodo } from "../context/TodoContext";
import { useState } from "react";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const {addNewTodo} = useTodo();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!todo) return;
    addNewTodo({
      id: Date.now(),
      message: todo,
      completed: false,
    });
    setTodo("");
  };

  const inputChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex">
      <input
        value={todo}
        onChange={inputChangeHandler}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
