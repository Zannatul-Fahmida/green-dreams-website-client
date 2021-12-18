import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';

const AdminRoute = ({ children, ...rest }) => {
    const {user, admin, isLoading} = useFirebase();
    const location = useLocation();
    if(isLoading){
        return <CircularProgress />
    }
    if(user.email && admin){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;