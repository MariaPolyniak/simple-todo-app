import React, { useState } from "react";
import { createId } from "../utils/id";
import Container from "./Container";
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Picture from "./Picture";
import Footer from "./Footer";

const createTodo = (title) => ({
  id: createId(),
  title,
  done: false,
});

function App() {
  const [todos, setTodos] = useState([]);

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
