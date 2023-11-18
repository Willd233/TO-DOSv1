import "./CreateTodoButton.css";
import '../../src/style/index.css';
function CreateTodoButton({setOpenModal}) {
    return (
      <button
        className="CreateTodoButton"
        onClick={() => setOpenModal(state => !state)}
      >
        +
      </button>
    );
  }
  

  export {CreateTodoButton}
  