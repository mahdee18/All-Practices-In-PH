import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider()
const user = {
    displayName:'Mahdee'
}
const AuthProviders = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading] = useState(true)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('Auth state changed', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const logOut = ()=>{
        return signOut(auth)
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleAuthProvider)
    }
    const authInfo = {
        user,
        loading,
        signInWithGoogle,
        createUser,
        loginUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;