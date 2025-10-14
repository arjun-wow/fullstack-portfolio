import React from 'react';

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>✕</button>
    </div>
  );
}

export default TodoItem;
