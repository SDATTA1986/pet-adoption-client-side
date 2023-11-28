import { createContext,  useEffect } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,GoogleAuthProvider, signInWithPopup} from "firebase/auth";


import { useState } from "react";
import { app } from "../firebase/firebase.config";


export const AuthContext=createContext(null);

const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const provider=new GoogleAuthProvider();
    
    const [user, setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const createGoogleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }  
    
    const upProfile=(Name,Photo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{displayName:`${Name}`,photoURL:`${Photo}`})
        .then(() => {
            setLoading(false); 
        })
        .catch(() => {
            setLoading(false); 
            
        });
    }
    

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return()=>{
            unSubscribe();
        }
    },[])
    const authInfo={
        user,
        loading,
        createUser,
        logOut,
        signIn,
        upProfile,
        createGoogleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;