import "./TodoList.css";
import '../../src/style/index.css';

function TodoList({children}) {
    return(
        <ul className="TodoList">
            {children}
        </ul>
    );
  }
  export{ TodoList }; 