import "./style/TodoCounter.css";
import "./style/Body.css";

  
  function TodoCounter({ total, completed }) {
    return(
        <h1 className="TodoCounter">
          Has completado {completed} de {total} TODOs
        </h1>
    );
  }
  export{ TodoCounter }; 