import React from "react";
import Container from "./Container";
import Header from "./Header";
import AddTodo from "./AddTodo";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <AddTodo />
        {/*<TodoList /> */}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
