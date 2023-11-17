import { TodoCounter } from '../TodoCounter/Counter';
import { TodoSearch } from '../TodoSearch/search';
import { TodoList } from '../TodoList/list';
import { TodoItem } from '../TodoItem/item';
import { TodosLoading } from '../TodosLoading/loading';
import { TodosError } from '../TodosError/error';
import { EmptyTodos } from '../EmptyTodos/empty';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCountext } from '../TodoContext/context';
import React from 'react';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo
  } = React.useContext(TodoCountext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchedTodos.length ===
          0) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>


      <CreateTodoButton />

    </>
  );
}

export { AppUI }