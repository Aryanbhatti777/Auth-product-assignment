import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router';

const PublicProtected = () => {

    const { user } = useContext(AuthContext);

    if (user) {
        return <Navigate to={"/home"} replace/>
    }

    return <Outlet/>
}

export default PublicProtected;