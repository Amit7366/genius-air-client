import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h2>404 ! Page not found</h2>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default NotFound;