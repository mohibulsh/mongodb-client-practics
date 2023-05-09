import { useState } from 'react'
import './App.css'

function App() {
  const handlerUsers = event =>{
    event.preventDefault()
    const form =event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user ={name, email}
    console.log(user)
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        alert('user added successfully')
        form.reset()
      }
    })
  }
  return (
    <>
      <h2>CURD server</h2>
      <form onSubmit={handlerUsers}>
        <input type="text" name="name" id="" placeholder='name' />
        <br />
        <input type="email" name="email" id="" placeholder='email' />
        <br />
        <input type="submit" value="Add Users" />
      </form>
    </>
  )
}

export default App
