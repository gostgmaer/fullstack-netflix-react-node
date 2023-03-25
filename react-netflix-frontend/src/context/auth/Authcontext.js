import React, { useContext, useState, useEffect } from "react";
const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    const LoginEvent = async (user,pass) => {
        // const login = await InvokeAPI(
        //     "api/login",
        //     "post",
        //     { username: user, password: pass},
        //     {},
        //     {}
        //   );
        //   console.log(login);
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


