import React, {useState} from "react";

export const AuthContext = React.createContext({
    isLoggedIn: false,
    logIn: () => {}
})

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogIn = () => setIsLoggedIn(true);
    const value = {
        isLoggedIn: isLoggedIn,
        logIn: handleLogIn
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider

