import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../firebase/firebase.config';

const RegisterForm = () => {
    const auth = getAuth(app)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleRegister = (event) => {
        event.preventDefault();
        if (name && email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    const loggedUser = result.user;
                })
                .catch((error) => {
                    const errorMessage = error.message;
                })
        } else {
            setError('Please fill in all required fields.');
        }
    };
    console.log(name,password,email)
    return (
        <div className='w-1/2 mx-auto text-center text-xl'>
            <form onSubmit={handleRegister}>
                <h1 className="my-5">Please Register</h1>
                <p className='text-red-500'>{error}</p>
                <input 
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mb-2 p-4 rounded border border-2"
                />{" "}
                <br />
                <input 
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mb-2 p-4 rounded border border-2"
                />{" "}
                <br />
                <input 
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mb-2 p-4 rounded border border-2"
                />{" "}
                <br />
                <input type="submit" className="btn px-4 py-2 rounded bg-cyan-300" />
                <br /> <br />
            </form>
        </div>
    );
};

export default RegisterForm;
