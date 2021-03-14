import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onRemoveTodo, onToggleStatus }) {
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          onRemoveTodo={onRemoveTodo}
          onStatusChange={onToggleStatus}
        />
      ))}
    </div>
  );
}

export default TodoList;
