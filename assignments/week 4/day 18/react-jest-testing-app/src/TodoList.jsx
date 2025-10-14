import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  function addTodo() {
    if (!text.trim()) return;
    setTodos(prev => [...prev, text]);
    setText('');
  }

  function removeTodo(index) {
    setTodos(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Todo List</h2>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add todo"
        data-testid="todo-input"
      />
      <button onClick={addTodo} data-testid="add-btn">Add</button>
      <ul data-testid="todo-list">
        {todos.map((todo, i) => (
          <li key={i}>
            {todo} <button onClick={() => removeTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
