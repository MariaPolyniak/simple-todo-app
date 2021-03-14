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
});

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos([...todos, createTodo(title)]);
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <Container>
        <Header />
        <AddTodo onAddTodo={addTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
