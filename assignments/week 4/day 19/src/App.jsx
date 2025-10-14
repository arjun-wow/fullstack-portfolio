import React, { useEffect, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import TodoList from "./components/TodoList";
import Loader from "./components/Loader";
import ThrowError from "./components/ThrowError";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTodos(["Complete Day 17", "Write tests (Day 18)", "Add Error Boundaries (Day 19)"]);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  return (
    <div className="p-8 max-w-lg mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Day 19 - Performance & Error Handling</h1>

      <ErrorBoundary>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="flex justify-center mb-4">
              <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter new todo"
                className="border px-2 py-1 rounded mr-2"
              />
              <button onClick={addTodo} className="bg-blue-500 text-white px-3 py-1 rounded">
                Add
              </button>
            </div>

            <TodoList todos={todos} deleteTodo={deleteTodo} />

            <button
              onClick={() => setShowError(true)}
              className="mt-6 bg-red-500 text-white px-3 py-1 rounded"
            >
              Trigger Error
            </button>

            {showError && <ThrowError />}
          </>
        )}
      </ErrorBoundary>
    </div>
  );
}

export default App;