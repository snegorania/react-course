import React from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    logIn: () => {},
    logOut: () => {}
});

AuthContext.displayName = "AuthContext";

export default AuthContext;