
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    sendPasswordResetEmail,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    const updateUser = (profile) => {
        if (!auth.currentUser) {
            return Promise.reject(
                new Error("No authenticated user found.")
            );
        }

        return updateProfile(auth.currentUser, profile);
    };

    // Forgot Password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(
            auth,
            (currentUser) => {
                setUser(currentUser);
                setLoading(false);
            }
        );

        return () => {
            unSubscribe();
        };
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        updateUser,
        resetPassword,
        loading,
        setLoading,
    };

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;

