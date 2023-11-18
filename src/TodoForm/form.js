import './TodoForm.css'
import { TodoContext } from '../TodoContext/context';
import React from "react";


function TodoForm() {
    const {
        setOpenModal,
        addTodo

    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] =
        React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }
    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}
            className='form'>
            <label className='label'>Escribe tu todo</label>
            <textarea
                placeholder="Escribe aqui"
                value={newTodoValue}
                onChange={onChange}
                className='text-area' />
            <button
                type=''
                className="TodoForm-button
            TodoForm-button--cancel"
                onClick={onCancel}
            >Cancelar</button>
            <button
                type=''
                className="TodoForm-button
            TodoForm-button--add"
            >Agregar</button>

        </form>
    )
}

export { TodoForm }