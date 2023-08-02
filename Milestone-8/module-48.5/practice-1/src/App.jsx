import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <LoadPost></LoadPost>
        <District name='Sylhet' specialty='Chaa'></District>
        <District name='Chittagong' specialty='Sea-Beach'></District>
        <District name='Bogra' specialty='Dhoi'></District>
      </div>
    </div>
  )
}
function LoadPost(){
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setPosts(data))
  },[])
  return(
    <div> 
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post=><Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
function Post(props){
  return(
    <div>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}
const districtStyle = {
  backgroundColor: 'lightBlue',
  margin: '20px',
  borderRadius: '10px',
  padding: '20px',
  border: '1px solid red'
}
function District(props) {
  const [power, setPower] = useState(1)

  const boostPower = () => {
    const newPower = power*2;
    setPower(newPower)
  }
  return (
    <div style={districtStyle}>
      <h4>Name: {props.name}</h4>
      <p>Specialty: {props.specialty}</p>
      <h5>Power: {power}</h5>
      <button onClick={boostPower}>Boost Power</button>
    </div>
  )
}
export default App
