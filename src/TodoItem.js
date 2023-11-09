import './style/TodoItem.css';
import { BsCheckLg } from "react-icons/bs";
import { IoClose } from "react-icons/io5";


function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
       <BsCheckLg /> 
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete "
        onClick={props.onDelete}
      >
       <IoClose />
      </span>
    </li>
  );
}

export { TodoItem };
// 

// function TodoItem(props) {
//     return(
//         <li className="TodoItem">
//           <span className={`Icon Icon-check 
//           ${props.completed && "Icon-check--active"}`}>
//             V</span>
//           <p className={`TodoItem-p ${props.
//             completed && "TodoItem-p--complete"}`}>
//           {props.text}
//           </p>
//           <span className="Icon Icon-delete">
//             X</span>  
//         </li>
//     );
//   }
// export { TodoItem };  