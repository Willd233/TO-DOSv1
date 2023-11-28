import { TodoCounter } from '../TodoCounter/Counter';
import { TodoSearch } from '../TodoSearch/search';
import { TodoList } from '../TodoList/list';
import { TodoItem } from '../TodoItem/item';
import { TodosLoading } from '../TodosLoading/loading';
import { TodosError } from '../TodosError/error';
import { EmptyTodos } from '../EmptyTodos/empty';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext/context';
import React from 'react';
import { Modal } from '../Modal/modal';
import { TodoForm } from '../TodoForm/form';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchedTodos.length ===
          0) && <EmptyTodos />}

        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            title={todo.title}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.title)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}

      </TodoList>


      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

    </>
  );
}

export { AppUI }