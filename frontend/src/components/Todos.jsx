import React from 'react'

export default function Todos({todos}) {
  return (
    <div>
      {todos.map(function(todo){
        return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            <button>Delete Todo</button>
        </div>
      }) 
      }
    </div>
  )
}
