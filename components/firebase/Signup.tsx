import React, { useState } from "react";
import { useRouter } from "next/router";

import firebase from "firebase/app";
import {
  fetchSignInMethodsForEmail,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  sendSignInLinkToEmail,
  updateCurrentUser,
  EmailAuthProvider,
} from "firebase/auth";
import { auth } from "../../src/firebase";

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:3000",
  // This must be true.
  handleCodeInApp: true,

  // dynamicLinkDomain: "localhost:3000.page.link",
};

const App = () => {
  const router = useRouter();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  // const auth = getAuth();
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      sendSignInLinkToEmail(auth, registerEmail, actionCodeSettings)
        .then((userCredential) => {
          console.log(userCredential);
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          // window.localStorage.setItem("emailForSignIn", loginEmail);
          // ...
        })
        .catch((error) => {
          console.log("sendEmail", error);
        });
    } catch (error: any) {
      console.log("signIn", error);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      // router.push({
      //   pathname: "/LoginComplete",
      // });
      console.log("after signInWithEmailAndPassword", user);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const fetchSignIn = () => {
    console.log(auth, loginEmail);
    fetchSignInMethodsForEmail(auth, loginEmail)
      .then((signInMethods) => {
        console.log(signInMethods);
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
      });
  };

  return (
    <>
      <div>
        <h1>회원가입</h1>
        <input
          placeholder="Email"
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />
        <input
          placeholder="EmailPassword"
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        />
        <button onClick={register}>CreateUser</button>
      </div>
      <div>
        <h1>로그인</h1>
        <input
          placeholder="Email"
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <input
          placeholder="EmailPassword"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>
        {/* <div>User Logged In : {user?.email}</div> */}
      </div>
      <button onClick={fetchSignIn}>fetchSignIn</button>
    </>
  );
};
export default App;
