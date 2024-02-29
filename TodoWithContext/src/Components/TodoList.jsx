import React, { useState } from 'react'
import useTodo from "../Contexts/TodoContext"

export const TodoList = ({todo}) => {

  const [todoMsg, settodoMsg] = useState(todo.todo)
  const [isEditable, setisEditable] = useState(false);

  const {deleteTodo,updateTodo,Complete} = useTodo();

  const editTodo = () =>{
    updateTodo(todo.id,{...todo, todo:todoMsg})
    setisEditable(false);
  }

  const toggle = () =>{
    Complete(todo.id);
  }

  return (
<div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.isCompleted}
              onChange={toggle}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                isEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.isCompleted ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => settodoMsg(e.target.value)}
              readOnly={!isEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.isCompleted) return;

                  if (isEditable) {
                      editTodo();
                  } else setisEditable((prev) => !prev);
              }}
              disabled={todo.isCompleted}
          >
              {isEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>  )
}
