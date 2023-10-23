import React from "react";
import ToDo from "../models/todo";
import { useState } from "react";


export const toDosContext = React.createContext<{
  items: ToDo[],
  addTodo: (text: string) => void,
  remove: (id: string) => void,
}>({
    items: [],
    addTodo: (text: string) => {},
    remove: (id: string) => {},
});

const Provider: React.FC<{children?: React.ReactNode}> = ({children}) => {
    const [todos, setToDo] = useState<ToDo[]>([]);

  const handleAddToDo = (text: string) => {
    setToDo(prev => prev.concat(new ToDo(text)));
  }

  const handleRemove = (id: string) => {
    setToDo(prev => prev.filter(el => el.id !== id));
  }

  const value = {
    items: todos,
    addTodo: handleAddToDo,
    remove: handleRemove
  }

  return <toDosContext.Provider value={value}>{children}</toDosContext.Provider>
}

export default Provider;
