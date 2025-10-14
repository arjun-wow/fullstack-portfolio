import React from "react";
import TodoItem from "./TodoItem";

const TodoList = React.memo(({ todos, deleteTodo }) => {
  return (
    <ul className="mt-4">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
});

export default TodoList;