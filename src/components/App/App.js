import React, { useState, useEffect } from "react";
import { createId } from "../../utils/id";
import Container from "../Container/Container";
import Header from "../Header/Header";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import Picture from "../Picture/Picture";
import Footer from "../Footer/Footer";

import "./App.scss";

const storage = {
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem(key) {
    const item = localStorage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (e) {
      return null;
    }
  },
};

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
          <Picture />
        )}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
