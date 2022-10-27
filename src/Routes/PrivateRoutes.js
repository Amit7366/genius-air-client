import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    
            if(!user){
                return <Navigate to='/login'></Navigate>
            }
            return children;
       
    
};

export default PrivateRoutes;