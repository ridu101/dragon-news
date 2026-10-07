import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase.config";


// import React from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //  register user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signOut

    const logOut = () => {
        return signOut(auth)
    }
    // login user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // observer set
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
    }
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;