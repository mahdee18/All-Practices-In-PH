import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider } from 'firebase/auth';
import app from '../firebase/firebase.config';

const Login = () => {
  const [error, setError] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Signed in with Google
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle errors here
        setError(error.message);
        console.log(error);
      });
  };
  const handleGitHubLogin = ()=>{
    signInWithPopup(auth,GithubProvider)
    .then((result)=>{
        const user = result.user;
        console.log(user)
    })
    .catch((error)=>{
        setError(error.message)
        console.error(error)
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login with email and password
  };

  return (
    <div className="w-1/2 mx-auto py-5 text-xl text-center">
      <h1 className="my-5">Please Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="mb-2 p-4 rounded border border-2"
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="mb-2 p-4 rounded border border-2"
          required
        />{" "}
        <br />
        <button className="btn px-4 py-2 rounded bg-cyan-300"> Login</button>{" "}
        <br /> <br />
      </form>
      <button
        className="btn px-4 py-2 rounded bg-cyan-300"
        onClick={handleGoogleLogin}
      >
        {" "}
        Login with Google
      </button> <br /> <br />
      <button
        className="btn px-4 py-2 rounded bg-cyan-300"
        onClick={handleGitHubLogin}
      >
        {" "}
        Login with GitHub
      </button>
      <br /> <br />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Login;
