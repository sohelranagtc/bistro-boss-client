import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app);
const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

const CreateUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
    setLoading(false)
} 

const LogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    setLoading(false)
}

useEffect(()=>{
    onAuthStateChanged(auth, CurrentUser=>{
    if(CurrentUser){
        
    }
    })
},[])

    const AuthInfo = {
        user,
        loading,
        CreateUser,
        LogIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;