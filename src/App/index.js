import React from 'react';
import { AppUI } from './AppUi';
import { TodoProvider } from '../TodoContext/context';




function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
export default App;


