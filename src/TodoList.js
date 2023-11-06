import "./style/TodoList.css";
import "./style/Body.css";
function TodoList({children}) {
    return(
        <ul className="TodoList">
            {children}
        </ul>
    );
  }
  export{ TodoList }; 