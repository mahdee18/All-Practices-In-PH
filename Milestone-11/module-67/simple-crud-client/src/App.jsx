import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';
const App = () => {
  const handleAddUser = event=>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value
    const email= form.email.value;
    const user = {name,email}
    console.log(name,email,user)
    fetch('http://localhost:3000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  }
  return (
    <div>
      <h3>Simple CRUD</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <Link to='/users'>See Users</Link>
    </div>
  );
};

export default App;