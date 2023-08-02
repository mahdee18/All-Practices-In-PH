import React, { useEffect, useState } from 'react';
import './App.css'
const App = () => {
  const [user,setUser] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/users')
    .then(res=>res.json())
    .then(data => setUser(data))
  },[])

  const handleAddUser=(event)=>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value
    const email = form.email.value
    const user = {name,email}
    console.log(user)
    fetch('http://localhost:3000/users',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      const newUsers = [...user,newUsers]
      setUser(newUsers)
      form.reset()

    })
  }
  return (
    <>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name'  />
        <br />
        <input type="email" name='email'  />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <h3>Users management : {user.length}</h3>
      <div>
        {
          user.map(us=> <li>{us.email}</li>)
        }
      </div>
    </>
  );
};

export default App;