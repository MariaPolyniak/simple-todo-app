import React, { useState } from "react";
import { createId } from "../utils/id";
import Container from "./Container";
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

const createTodo = (title) => ({
  id: createId(),
  title,
  done: false,
});

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos([...todos, createTodo(title)]);
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleStatus(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  }

  return (
    <div className="App">
      <Container>
        <Header />
        <AddTodo onAddTodo={addTodo} />
        <TodoList
          todos={todos}
          onRemoveTodo={removeTodo}
          onToggleStatus={toggleStatus}
        />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
