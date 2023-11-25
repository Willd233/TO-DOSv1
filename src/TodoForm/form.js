import './TodoForm.css'
import { TodoContext } from '../TodoContext/context';
import React from "react";


function TodoForm() {
    const { setOpenModal, addTodo } = React.useContext(TodoContext);
    const [newTodoTitle, setNewTodoTitle] = React.useState('');
    const [newTodoValue, setNewTodoValue] = React.useState('');
  
    const onSubmit = (event) => {
      event.preventDefault();
      addTodo(newTodoTitle, newTodoValue);
      setOpenModal(false);
    };
  
    const onCancel = (event) => {
      event.preventDefault();
      setOpenModal(false);
    };
  
    const onChangeTitle = (event) => {
      setNewTodoTitle(event.target.value);
    };
  
    const onChangeValue = (event) => {
      setNewTodoValue(event.target.value);
    };
  
    return (
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          placeholder='Title'
          value={newTodoTitle}
          onChange={onChangeTitle}
          className='text-title'
        />
  
        <label className='label'>Enter your pending task</label>
        <textarea
          placeholder="Write here"
          value={newTodoValue}
          onChange={onChangeValue}
          className='text-area'
        />
  
        <button
          type='button'
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
  
        <button
          type='button'
          className="TodoForm-button TodoForm-button--add"
          onClick={onSubmit}
        >
          Add
        </button>
      </form>
    );
  }
  

export { TodoForm }