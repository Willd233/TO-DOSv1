import "./CreateTodoButton.css";
import '../../src/style/index.css';
import { IoClose } from "react-icons/io5";
function CreateTodoButton({setOpenModal}) {
    return (
      <button
        className="CreateTodoButton"
        onClick={() => setOpenModal(state => !state)}
      >
              <IoClose />

      </button>
    );
  }
  

  export {CreateTodoButton}
  