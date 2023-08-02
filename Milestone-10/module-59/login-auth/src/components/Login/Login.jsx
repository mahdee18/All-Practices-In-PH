import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const Login = () => {
    const auth = getAuth(app)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value
        console.log(email, password,name)
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Please add at least two uppercase!!')
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please add at least one Special Symbol!!')
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least one number!!')
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess(loggedUser)
                if (!loggedUser.emailVerified) {

                }
                form.reset()
                setError('')
            })
            .catch(error => {
                setError(error.message)
                setSuccess('')
            })

    };
    const handleResetPassword = event => {
        const email =emailRef.current.value;
        if(!email){
            alert('Please provide a valid E-mail!')
            return;
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('Please check your email!')
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    return (
        <div className='w-50 mx-auto' onSubmit={handleSubmit}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required name='email' ref={emailRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required name='password' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <small>New to the website ? Please <Link to='/register-rb'>Register</Link></small> <br />
            <small>Forgot password? please <button className='btn btn-link' onClick={handleResetPassword}>Reset</button></small>
        </div>
    );
};

export default Login;
