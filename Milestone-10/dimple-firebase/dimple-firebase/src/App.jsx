import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase.config';
import { useState } from 'react';
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
function App() {
  const [user, setUser] = useState(null)
  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedInUser = result.user
        console.log(loggedInUser)
        setUser(loggedInUser)
      })
      .catch(error => {
        console.log('error', error.message)
      })
  }
  const handleSignOut = () => {
    setUser(auth)
      .then(result => {
        console.log(result)
        setUser(null)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="App">

      <h1>Firebase + React</h1>
      {user ?

        <button onClick={handleSignOut}>Google Sign Out</button> :
        <button onClick={handleSignIn}>Google Sign In</button>
      }
      {user &&
        <div>
          <h3>User:{user?.displayName}</h3>
          <p>E-mail {user?.email}</p>
          <img src={user?.photoURL} alt="" />
        </div>}
    </div>
  )
}

export default App
