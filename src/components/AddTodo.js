import React, { useState } from "react";

function AddTodo(props) {
  const [value, setValue] = useState("");

  function addValue(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <input type="text" value={value} onChange={addValue}></input>
      <button onClick={props.toggleTodo}>Add</button>
    </div>
  );
}

export default AddTodo;
