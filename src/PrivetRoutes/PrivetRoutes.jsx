import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    let location = useLocation()

    if (loading) {
        return  <div className="radial-progress" style={{"--value":70}}>70%</div>
    }

    if (user) {
        return children
    }
    return  <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivetRoutes;