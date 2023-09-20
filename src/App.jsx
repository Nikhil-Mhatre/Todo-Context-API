import { useEffect, useState } from "react";
import { TodoProvider } from "./context/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (newTodo) => {
    // This method takes TodoObject as argument
    setTodos((prevTodo) => [...prevTodo, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) =>
      prevTodo.filter((currentTodo) => currentTodo.id !== id)
    );
  };

  const updateTodo = (id, newMsg) => {
    setTodos((prevTodo) =>
      prevTodo.map((currentTodo) =>
        currentTodo.id === id
          ? { ...currentTodo, message: newMsg }
          : currentTodo
      )
    );
  };

  const toggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((currentTodo) =>
        currentTodo.id === id
          ? { ...currentTodo, completed: !currentTodo.completed }
          : currentTodo
      )
    );
  };

  useEffect(() => {
    const fetchedTodos = JSON.parse(localStorage.getItem("todos"));
    if (fetchedTodos && fetchedTodos.length > 0) setTodos(fetchedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addNewTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
