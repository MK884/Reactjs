import React from "react";
import { useContext } from "react";

export const ToDoContext = React.createContext({
  todos: [
    {
      id: 0,
      todo: "",
      isCompleted: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id,todo) => {},
  Complete: (id) => {},
});

export const TodoProvider = ToDoContext.Provider;

const useTodo = () =>{
    return useContext(ToDoContext);
}

export default useTodo;