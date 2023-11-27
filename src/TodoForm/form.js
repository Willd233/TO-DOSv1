import './TodoForm.css';
import { TodoContext } from '../TodoContext/context';
import React from 'react';
import Select from 'react-select';


const options = [
  { label: "Personal", value: "Personal", },
  { label: "Work", value: "Work" },
  { label: "Shopping", value: "Shopping" },
];

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [newTodoTitle, setNewTodoTitle] = React.useState('');
  const [newTodoValue, setNewTodoValue] = React.useState('');


  // ...

  const onSelectOption = (selectedOption) => {
    setNewTodoTitle(selectedOption.label);
  };

  const onChangeValue = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoTitle, newTodoValue);
    setOpenModal(false);
  };

  const onCancel = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit} className='form'>
      <Select
        options={options}
        onChange={onSelectOption}
        id='text-select'
      />

      <label className="label">Enter your pending task</label>
      <textarea
        placeholder="Write here"
        value={newTodoValue}
        onChange={onChangeValue}
        className="text-area"
      />

      <button
        type="button"
        className="TodoForm-button TodoForm-button--cancel"
        onClick={onCancel}
      >
        Cancel
      </button>

      <button
        type="button"
        className="TodoForm-button TodoForm-button--add"
        onClick={onSubmit}
      >
        Add
      </button>
    </form>
  );
}





export { TodoForm }