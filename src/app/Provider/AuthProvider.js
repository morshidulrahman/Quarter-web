import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebase/firebase";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [user, setUser] = useState(null);
  const [paymentinfo, setpaymentinfo] = useState(null);

  const provider = new GoogleAuthProvider();

  const CreateUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Signin = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const GoogleLogin = () => {
    setloading(true);
    return signInWithPopup(auth, provider);
  };

  const Updateuser = (name, photourl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    });
  };

  const Logout = async () => {
    return signOut(auth);
  };

  const saveUser = async (user) => {
    const currentUser = {
      email: user?.email,
      role: "user",
      status: "checked",
    };
    const { data } = await axios.put(
      `${import.meta.env.VITE_API_URL}/users`,
      currentUser
    );

    return data;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        saveUser(currentUser);
      }
      setloading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const userinfo = {
    CreateUser,
    Signin,
    GoogleLogin,
    Logout,
    Updateuser,
    loading,
    user,
    setUser,
    setpaymentinfo,
    paymentinfo,
  };

  return (
    <AuthContext.Provider value={userinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
