import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TodoItem from "../TodoItem/TodoItem";

import "./TodoList.scss";

function TodoList({ todos, onRemoveTodo, onToggleStatus }) {
  return (
    <div className="TodoList">
      <TransitionGroup component={null}>
        {todos.map((todo, index) => (
          <CSSTransition
            appear={true}
            key={todo.id}
            timeout={500}
            classNames="item"
            unmountOnExit
          >
            <TodoItem
              todo={todo}
              index={index}
              onRemoveTodo={onRemoveTodo}
              onStatusChange={onToggleStatus}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default TodoList;
