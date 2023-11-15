import { TodoCounter } from '../TodoCounter/Counter';
import { TodoSearch } from '../TodoSearch/search';
import { TodoList } from '../TodoList/list';
import { TodoItem } from '../TodoItem/item';
import { CreateTodoButton } from '../CreateTodoButton';
function AppUI ({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodo,
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
            {searchedTodo.map(todo => (
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