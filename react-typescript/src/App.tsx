import { useContext } from 'react';
import React from 'react';
import Todos from './components/Todos';
import NewToDo from './components/NewToDo';
import { toDosContext } from './context/todos-context';

function App() {

  const ctx = useContext(toDosContext);

  return (
    <div>
      <NewToDo/>
      <Todos items={ctx.items}/>
    </div>
  );
}

export default App;
