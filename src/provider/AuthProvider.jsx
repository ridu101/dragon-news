import {  createContext, useState } from "react";


// import React from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "ridu",
        email: "ridu@gmail.com",
    });
 
    const authData = {
        user,
        setUser,
    }
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;