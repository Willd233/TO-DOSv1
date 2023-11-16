import { TodoCounter } from '../TodoCounter/Counter';
import { TodoSearch } from '../TodoSearch/search';
import { TodoList } from '../TodoList/list';
import { TodoItem } from '../TodoItem/item';
import { TodosLoading } from '../TodosLoading/loading';
import { TodosError } from '../TodosError/error';
import { EmptyTodos } from '../EmptyTodos/empty';
import { CreateTodoButton } from '../CreateTodoButton';
function AppUI ({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <>
          
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
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
              onComplete = {() => completeTodo(todo.text)}
              onDelete = {() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          <CreateTodoButton />  
    
        </>
      );
}

export {AppUI}