import React, { useState } from "react";

function AddTodo(props) {
  const [value, setValue] = useState("");

  function addValue(e) {
    setValue(e.target.value);
  }

  function addTodo() {
    props.onAddTodo({ title: value });
    setValue("");
  }

  return (
    <div>
      <input type="text" value={value} onChange={addValue}></input>
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default AddTodo;
