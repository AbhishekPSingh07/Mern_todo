import React, { useState } from 'react'

function CreateTodo() {
    const[title,setTitle] = useState("")
    const[description,setDescription] = useState("")

  return (
    <div>
      <input style={{
        margin: 10,
        padding: 10,
      }} type="text" placeholder='title' onChange={function(e){
        setTitle(e.target.value);
      }}/><br/>
      <input style={{
        margin: 10,
        padding: 10,
      }}  type='text' placeholder='description' onChange={function(e){
        setTitle(e.target.value);
      }}/><br/>
      <button style={{
        margin: 10,
        padding: 10,
      }} onClick={()=> {
        fetch("http://localhost:8800/todo",{
            method:  "POST",
            body : JSON.stringify({
                title: title,
                description: description
            }),
            headers:{
                "content-type": "application/json"
            }
        })
      }}>Add a todo</button>
    </div>
  )
}

export default CreateTodo
