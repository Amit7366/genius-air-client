import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const loaction = useLocation();

            if(loading){
                return <Spinner animation="border" variant="warning" />;
            }
    
            if(!user){
                return <Navigate to='/login' state={{from: loaction}} replace></Navigate>
            }
            return children;
       
    
};

export default PrivateRoutes;