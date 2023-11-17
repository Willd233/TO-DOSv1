import "./TodoCounter.css";
import '../../src/style/index.css';
import React from "react";
import { TodoCountext } from "../TodoContext/context";

function TodoCounter() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoCountext);

  return (
    <h1 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h1>
  );
}
export { TodoCounter }; 