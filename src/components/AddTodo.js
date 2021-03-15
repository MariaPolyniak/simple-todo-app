import React, { useState } from "react";

function AddTodo(props) {
  const [value, setValue] = useState("");

  function addValue(e) {
    setValue(e.target.value);
  }

  function addTodo() {
    props.onAddTodo(value);
    setValue("");
  }

  return (
    <div className="AddTodo">
      <input
        className="todoInput"
        type="text"
        placeholder="Enter your todo"
        value={value}
        onChange={addValue}
      ></input>
      <button className="todoBtn" onClick={addTodo}>
        <img src="/assets/rocket.png" alt="rocket" height="30px" />
      </button>
    </div>
  );
}

export default AddTodo;
