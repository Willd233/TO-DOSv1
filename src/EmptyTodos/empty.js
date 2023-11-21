import "./EmptyTodos.css";
import { FaGear } from "react-icons/fa6";



function EmptyTodos() {
  return (
    <div className="EmptyTodo">
      <p className="p">Your to-do list is blank.
      </p>
      <p className="p2"><FaGear /></p>
    </div>
  );
}
export { EmptyTodos }; 