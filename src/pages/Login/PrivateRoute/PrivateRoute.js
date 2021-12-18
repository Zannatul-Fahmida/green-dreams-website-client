import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';

const PrivateRoute = ({ children }) => {
    const {user, isLoading} = useFirebase();
    let location = useLocation();
    if(isLoading){
        return <CircularProgress />
    }
    if(user.email){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;