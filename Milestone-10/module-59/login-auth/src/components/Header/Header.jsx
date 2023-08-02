import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-50 mx-auto m-4'>
            <Link  to='/'>Home</Link>
            <Link className='m-3' to='/register'>Register</Link>
            <Link to='/register-rb'>Register RB</Link>
            <Link className='m-3' to='/login'>Login</Link>
        </div>
    );
};

export default Header;