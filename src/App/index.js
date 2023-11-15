import React from 'react';
import { AppUI } from './AppUi';
import { useLocalStorage } from './useLocalStorage';


// const defaultTodos = [
//   {text: `cocinar`,  completed: true},
//   {text: `lavar`,  completed: false},
//   {text: `frEgar`,  completed: false},
//   {text: `dormir siesta`,  completed: true},
//   {text: `entrenar por la tarde`,  completed: false},
// ]

// localStorage.setItem(`TODOS_V1`, JSON.stringify(defaultTodos));


function App() {

  const [todos, saveTodos] = useLocalStorage
  ("TODOS_V1", []);
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
    (todo)=> todo.text === text
  );
  newTodos[todoIndex].completed = true;
  saveTodos(newTodos);
}

const deleteTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo)=> todo.text === text
  );
  newTodos.splice (todoIndex,)
  saveTodos(newTodos);
}
  return (
    <AppUI 
    completedTodos ={completedTodos}
    totalTodos ={totalTodos}
    searchValue ={searchValue}
    setSearchValue ={setSearchValue}
    searchedTodo ={searchedTodo}
    completeTodo ={completeTodo}
    deleteTodo = {deleteTodo}
    />
  );
}
export default App;
