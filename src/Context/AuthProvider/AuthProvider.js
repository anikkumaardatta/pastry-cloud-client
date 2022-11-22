import React, { Children, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const updateUser = (name, photo) => {
  updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  });
};

const googleSignIn = () => {
  return signInWithPopup(auth, googleProvider);
};

const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
const logOut = () => {
  return signOut(auth);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    updateUser,
    googleSignIn,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
