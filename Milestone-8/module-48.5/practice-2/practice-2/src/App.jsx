import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      <LoadUsers></LoadUsers>
      </div>
    </div>
  )
}
function LoadUsers(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return(
    <div>
      {
        users.map(user=><User id={user.id} name={user.name} address={user.address.street}></User>)
      }
    </div>
  )
}
function User(props){
  return(
    <div style={{
      backgroundColor:'lightBlue',
      padding:'20px',
      margin:'20px',
      border:'2px solid gray',
      borderRadius:'5px'
    }}>
      <h3>ID: {props.id}</h3>
      <h3>Name: {props.name}</h3>
      <h5>Address: {props.address}</h5>
    </div>
  )
}
export default App
