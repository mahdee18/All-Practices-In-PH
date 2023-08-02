import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <Link to='/'>Home</Link> 
           <Link to='/about'>About</Link> 
           <Link to='/product'>Product</Link> 
           <Link to='/countries'>Countries</Link> 
        </div>
    );
};

export default Header;