import React from "react";

function TodoItem({ index, todo, onRemoveTodo, onStatusChange }) {
  return (
    <div className="TodoItem">
      <label className="checkbox path">
        <input
          className="TodoItem__check"
          type="checkbox"
          onChange={() => onStatusChange(todo.id)}
        />
        <svg viewBox="0 0 21 21">
          <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
        </svg>
      </label>
      <span className="TodoItem__number">{index + 1}</span>
      <span
        className="TodoItem__text"
        style={todo.done ? { textDecoration: "line-through" } : null}
      >
        {todo.title}
      </span>
      <button className="TodoItem__btn" onClick={() => onRemoveTodo(todo.id)}>
        <img src="/assets/close.svg" alt="close" />
      </button>
    </div>
  );
}

export default TodoItem;
