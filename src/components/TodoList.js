import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div className="TodoList">
      {props.todos.map((todo, idx) => (
        <TodoItem todo={todo} index={idx} />
      ))}
    </div>
  );
}

export default TodoList;
