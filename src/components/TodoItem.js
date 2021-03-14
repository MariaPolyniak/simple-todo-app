import React from "react";

function TodoItem(props) {
  return (
    <div>
      <span>{props.index + 1}</span>
      {props.todo.title}
      <button>
        <img src="/assets/close.png" alt="close" width="10px" />
      </button>
    </div>
  );
}

export default TodoItem;
