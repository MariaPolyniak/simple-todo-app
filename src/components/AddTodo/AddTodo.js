import React, { useState } from "react";
import "./AddTodo.scss";
import rocketImg from "./rocket.png";

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
        className="AddTodo__input"
        type="text"
        placeholder="Enter your todo"
        value={value}
        onChange={addValue}
      ></input>
      <button className="AddTodo__btn" onClick={addTodo}>
        <img src={rocketImg} alt="rocket" height="30px" />
      </button>
    </div>
  );
}

export default AddTodo;
