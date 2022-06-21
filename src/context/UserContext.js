import React, { createContext } from "react";
import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";

const UserAuthContext = createContext();

export const UserContext = ({ children }) => {
  // -------------navigate variable-----------
  const navigate = useNavigate();
  // -------------/navigate variable-----------

  let name = "Slim Shaddy";
  // --------------sign up ------------
  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // ---------------Log In--------------
  const userLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
        console.log("login Success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // -----------send password reset Email--------
  const passwordReset = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password Reset Email Sent Successfully");
      })
      .catch((error) => alert(error.message));
  };

  // confirmResetPassword
  const confirmPassword = (oobcode, latestPassword) => {
    confirmPasswordReset(auth, oobcode, latestPassword)
      .then(() => alert("Password Reset Succesfully"))
      .catch((error) => alert(error.message));
  };
  return (
    <UserAuthContext.Provider
      value={{
        name,
        createUser,
        userLogin,
        passwordReset,
        confirmPassword,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export { UserAuthContext };
