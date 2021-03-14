import React from "react";

function TodoItem({ index, todo, onRemoveTodo }) {
  return (
    <div>
      <span>{index + 1}</span>
      {todo.title}
      <button onClick={() => onRemoveTodo(todo.id)}>
        <img src="/assets/close.png" alt="close" width="10px" />
      </button>
    </div>
  );
}

export default TodoItem;
