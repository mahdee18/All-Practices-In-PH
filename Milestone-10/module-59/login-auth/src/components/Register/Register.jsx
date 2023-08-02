import React, { useState } from 'react';

const Register = () => {
    const [email,setEmail]= useState('')
    const handleOnSubmit=(event)=>{
        event.preventDefault()
        const email=event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)
    
    }
    const handleEmailChange=(event)=>{
        console.log(event.target.value)
        setEmail(event.target.value)
    }
    const handlePasswordBlur=(event)=>{
        console.log(event.target.value)
    }
    return (
        <div className='w-50 mx-auto'>
            <h4>Please Register!!</h4>
            <form onSubmit={handleOnSubmit}>
                <input type="email" className='ps-1' onChange={handleEmailChange} name="email" id='email' placeholder='Enter your Email' /> <br />
                <input type="password" className='ps-1' onBlur={handlePasswordBlur} name="password" id="password" placeholder='Enter your password' /> <br />
                <input type="submit" className='btn btn-primary' value='register' />

            </form>
        </div>
    );
};

export default Register;