import React, { useState } from 'react';

export const UserContext  = React.createContext("");
export const LoginContext = React.createContext(false);

const Store = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState("");

    return(
        <UserContext.Provider value={[user, setUser]}>
            <LoginContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
                {children}
            </LoginContext.Provider>
        </UserContext.Provider>
    )

};

export default Store;