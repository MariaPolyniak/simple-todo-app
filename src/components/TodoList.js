import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onRemoveTodo }) {
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
