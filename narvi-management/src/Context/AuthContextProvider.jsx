import React from "react";

export const AuthContext =React.createContext();

function AuthContextProvider({children}) {
    const [isAuth,setisAuth]=React.useState(false);
    const [token,setToken]=React.useState(null);
    const handleToken=(tokenVal)=>{
        setToken(tokenVal);
    }
    const handleAuth=()=>{
        setisAuth(!isAuth);
    }
    return(
        <AuthContext.Provider value={{isAuth:isAuth,token:token,handleToken:handleToken,handleAuth:handleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
