import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArrayExample from './component/ArrayExample'

function App() {
  const [count, setCount] = useState(0)
  const singleUser=[
    {
      "id":1,
      "name": "Mattie Knapp",
      "price": 252
    },
    {
      "id":2,
      "name": "Lee Witt",
      "price": 33
    },
    {
      "id":3,
      "name": "Velma Chaney",
      "price": 26
    },
    {
      "id":4,
      "name": "Barbara Vang",
      "price": 329
    },
    {
      "id":5,
      "name": "Weiss Torres",
      "price": 417
    }
  ]

  return (
    <div className="App">
      <ArrayExample key={singleUser.id} singleUser={singleUser}></ArrayExample>
    </div>
  )
}

export default App
