import React, { useState, useEffect } from "react";
import { createId } from "../../utils/id";
import { storage } from "../../utils/storage";
import Container from "../Container/Container";
import Header from "../Header/Header";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import EmptyList from "../EmptyList/EmptyList";
import Footer from "../Footer/Footer";

import "./App.scss";

const createTodo = (title) => ({
  id: createId(),
  title,
  done: false,
});

function App() {
  const [todos, setTodos] = useState(storage.getItem("todos") || []);

  useEffect(() => {
    storage.setItem("todos", todos);
  }, [todos]);

  function addTodo(title) {
    if (title.trim() === "") {
      return;
    }
    setTodos([...todos, createTodo(title)]);
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleStatus(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  return (
    <div className="App">
      <Container>
        <Header todos={todos} />
        <AddTodo onAddTodo={addTodo} />
        {todos.length ? (
          <TodoList
            todos={todos}
            onRemoveTodo={removeTodo}
            onToggleStatus={toggleStatus}
          />
        ) : (
          <EmptyList />
        )}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
