import { useState } from 'react'
import Cosmetics from './assets/cosmetics/cosmetics'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cosmetics></Cosmetics>
    </div>
  )
}

export default App
