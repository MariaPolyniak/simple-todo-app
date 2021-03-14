import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div className="TodoList">
      {props.todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
