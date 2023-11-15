import "./TodoCounter.css";
import '../../src/style/index.css';
  
  function TodoCounter({ total, completed }) {
    return(
        <h1 className="TodoCounter">
          Has completado {completed} de {total} TODOs
        </h1>
    );
  }
  export{ TodoCounter }; 