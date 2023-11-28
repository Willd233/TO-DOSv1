import './TodoItem.css';
import { IoClose } from "react-icons/io5";


function TodoItem(props) {
  return (
    <li
      className={`TodoItem ${props.completed && "TodoItem--completed"}`}
      onClick={props.onComplete}
    >
      <h3 className="title">{props.text}</h3>
      <p
        className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
      >
        {props.title}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={(event) => {
          event.stopPropagation();
          props.onDelete();
        }}
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