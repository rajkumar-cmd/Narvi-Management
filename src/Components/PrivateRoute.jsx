import React from "react";
import { AuthContext } from "../Context/AuthContextProvider"
import { Navigate } from "react-router-dom";


function PrivateRoute({children}) {
    const val=React.useContext(AuthContext);
    if(val.isAuth==false){
        return <Navigate to="/login"/>
    }
    else{
        return children;
    }
}

export default PrivateRoute;
