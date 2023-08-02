import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProviders';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between">
                <a className="btn btn-ghost normal-case text-xl">authMaster</a>
                <div >
                    <Link className='mr-4' to='/'>Home</Link>
                    <Link className='mr-4' to='/orders'>Orders</Link>
                    {user && <Link className='mr-4' to='/profile'>Profile</Link>}
                    <Link className='mr-4' to='/register'>Register</Link>
                    <Link className='mr-4' to='/login'>Login</Link>
                    {
                        user? <>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className='btn btn-xs'>Sign Out</button>
                        </> : <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;