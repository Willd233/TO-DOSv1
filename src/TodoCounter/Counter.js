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
      Has completado {completedTodos} de {totalTodos} TO-DOs
    </h1>
  );
}
export { TodoCounter }; 