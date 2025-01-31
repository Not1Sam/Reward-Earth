import React from 'react';
import jwtDecode from "jwt-decode";
import {Navigate} from 'react-router-dom';
import { useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import api from '../api';
import { REFRESH_TOKEN, ACCESS_TOKEN} from '../constants';


function ProtectedRoute({ children }){
    const [isAUth,setIsAuth] = useState(null);

    useEffect(() => {
        auth().catch(() => setIsAuth(false))
    },[])

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = await api.post("/api/token/refresh/", {
                refresh: refreshToken,
            });
            if (res.status == 200){
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setIsAuth(true);
            } else{
                setIsAuth(false);
            }
        }catch (error){
                console.log(error);
                setIsAuth(false);
            }
    };

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(!token){
            setIsAuth(false);
            return;
        }
        const decodedToken = jwtDecode(token);
        const tokenExp = decodedToken.exp;
        const now = Date.now() / 1000;

        if (tokenExp < now){
            await refreshToken();
        }else {
            setIsAuth(true);
        }
    };

    if (isAUth == null){
        return <div>Loading...</div>;
    }

    return isAUth ? children : <Navigate to="/login"/>;
}
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;