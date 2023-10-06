import React from "react";
import { useState } from "react";
import "./Todo.css";
function Todo(props) {
  return (
    <div>
      <div>
        <h1>{props.name} Todo's</h1>
        <img src={props.img} alt="" />
        <ul>
          {props.todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
