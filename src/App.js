import { TodoCounter } from './TodoCounter';
import React from 'react';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
  {text: `cocinar`,  completed: true},
  {text: `lavar`,  completed: false},
  {text: `frEgar`,  completed: false},
  {text: `dormir siesta`,  completed: true},
  {text: `entrenar por la tarde`,  completed: false},
]

function App() {
  const [todos, setTodos] = React.useState
  (defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(
    todo => !!todo.completed)
  .length;
  const totalTodos = todos.length;

  const searchedTodo = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
     return todoText.includes(searchText);
    }
    
  );
const completeTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo)=> todo.text == text
  );
  newTodos[todoIndex].completed = true;
  setTodos(newTodos);
}

const deleteTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo)=> todo.text == text
  );
  newTodos.splice (todoIndex, 1)
  setTodos(newTodos);
}
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
export default App;

