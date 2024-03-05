import { useState } from "react";
import "./App.css";
import {AddTodo}  from "./Components/AddTodo.jsx";
import { Todos } from "./Components/Todos.jsx"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Todos With Redux</h2>
      <AddTodo />
      <Todos/>
    </>
  );
}

export default App;
