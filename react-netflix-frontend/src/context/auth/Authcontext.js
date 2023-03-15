import React, { useContext, useState, useEffect } from "react";
const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    const LoginEvent = (second) => {
        // @ts-ignore
        setUser(true)
        window.localStorage.setItem('isloggedIn', user)

    }
    const logOutEvent = (second) => {
        // @ts-ignore
        setUser(null)
        window.localStorage.removeItem('isloggedIn')

    }

    return <AuthContext.Provider value={{
        user, setUser, LoginEvent,logOutEvent
    }}>{children}</AuthContext.Provider>;
};

export const useGlobalAuthContext = () => {
    return useContext(AuthContext);
};

export { AuthContext, AuthProvider };


