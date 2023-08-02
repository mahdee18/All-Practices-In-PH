import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';


const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
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
    const handleGithubSignIn=()=>{
        signInWithPopup(auth,githubProvider)
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
        <div>
            {
                user ?
                        <button onClick={handleSignOut}>SignOut</button>: 
                    <div>
                        <button onClick={handleGoogleSignIn}>Google LogIn</button>
                        <button onClick={handleGithubSignIn}>GitHub LogIn</button>
                    </div> 
            }
            {user &&
                <div>
                    <h3>User:{user?.displayName}</h3>
                    <p>E-mail {user?.email}</p>
                    <img src={user?.photoURL} alt="" />
                </div>}
        </div>
    );
};

export default Login;