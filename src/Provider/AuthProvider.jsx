import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';

const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()


const CreateUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
} 

const LogIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () => {
    setLoading(true)
    return signOut(auth)
}

const userUpdate = (name, photo) => {
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
}

const signWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
}



useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, CurrentUser=>{
        setUser(CurrentUser)
        console.log('current user', CurrentUser);

        // get and set token
        if(CurrentUser){
            axios.post('http://localhost:5000/jwt', {email : CurrentUser.email})
            .then(data =>{
                // console.log(data.data)
                localStorage.setItem('access-token', data.data)
                setLoading(false)
            })
        }
        else{
            localStorage.removeItem('access-token')
        }       
         
    if(CurrentUser){
     return ()=>{
        return unsubscribe()
     }   
    }
    })
},[])

    const AuthInfo = {
        user,
        loading,
        CreateUser,
        LogIn,
        logOut,
        userUpdate,
        signWithGoogle
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;