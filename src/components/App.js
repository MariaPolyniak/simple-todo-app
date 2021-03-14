import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

function App() {
  const [todos, setTodos] = useState([
    { title: "Написати додаток", id: 1 },
    { title: "Піти гуляти", id: 2 },
    { title: "Піти в магазин", id: 3 },
  ]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <Container>
        <Header />
        <AddTodo onAddTodo={addTodo} />
        <TodoList todos={todos} />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
