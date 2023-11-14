import "./CreateTodoButton.css";
import '../../src/style/index.css';
function CreateTodoButton() {
    return(

        <button className="CreateTodoButton"
        onClick=
        {(event) => { 
            console.log(`lo has hecho bien`)
            console.log(event)        
            console.log(event.target)        
        }
    }    
        >+</button> 
    );  
  }

  export {CreateTodoButton}
  