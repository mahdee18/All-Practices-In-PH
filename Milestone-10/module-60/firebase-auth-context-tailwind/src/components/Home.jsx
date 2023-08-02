import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            This is home{user.displayName}!
        </div>
    );
};

export default Home;