import React from "react";

function TodoItem({ index, todo, onRemoveTodo, onStatusChange }) {
  return (
    <div>
      <input type="checkbox" onChange={() => onStatusChange(todo.id)} />
      <span>{index + 1}</span>
      <span style={todo.done ? { textDecoration: "line-through" } : null}>
        {todo.title}
      </span>
      <button onClick={() => onRemoveTodo(todo.id)}>
        <img src="/assets/close.png" alt="close" width="10px" />
      </button>
    </div>
  );
}

export default TodoItem;
