import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProviders';

const Login = () => {
    const {loginUser,signInWithGoogle}=useContext(AuthContext)
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.error(error)
        })
    }
    const handleLogin=event=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        loginUser(email,password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            form.reset()
        })
        .catch(error=>{
            console.error(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl py-5 font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                            name='email'
                            className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" 
                            name='password'
                            className="input input-bordered" required/>
                            <label className="label">
                                <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <Link to='/register'>
                    <button className='btn btn-active btn-link'>New to auth master?</button>
                    </Link>
                    <div>
                        <button onClick={handleGoogleSignIn} className='btn btn-primary'>Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;