import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
      <span>{todo}</span>
      <button
        onClick={() => deleteTodo(todo)}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </li>
  );
};

export default TodoItem;