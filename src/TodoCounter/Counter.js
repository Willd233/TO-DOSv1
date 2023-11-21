import "./TodoCounter.css";
import '../../src/style/index.css';
import React from "react";
import { TodoContext } from "../TodoContext/context";

function TodoCounter() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      Tasks to do completed {completedTodos} out of {totalTodos}
    </h1>
  );
}
export { TodoCounter }; 