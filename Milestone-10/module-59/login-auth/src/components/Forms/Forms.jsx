import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';

import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const Forms = () => {
    const auth = getAuth(app);
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const handleOnSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value
        console.log(email, password, name)
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
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                event.target.reset()
                setError('')
                setSuccess('User registered successfully!')
                sentVerificationEmail(result.user)
                updateUserData(result.user,name)
            })
            .catch(error => {
                console.error(error.message)
                setError(error.message)
                setSuccess('')
            })
    }
    const sentVerificationEmail = (user) => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result)
                alert('Please verify a valid email!')
            })
    }
    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
            .then(() => {
                console.log('user name updated!')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className='w-50 mx-auto' onSubmit={handleOnSubmit}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" required name='name' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required name='email' />
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
            <small>Already have an account? please <Link to='/login'>Login</Link></small>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Forms;
