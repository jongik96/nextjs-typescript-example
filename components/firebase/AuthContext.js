import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../src/firebase";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
const AuthContext = React.createContext();
const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:3000",
  // This must be true.
  handleCodeInApp: true,

  dynamicLinkDomain: "example.page.link",
};
// Context를 지정함
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  // 회원가입하는 함수
  function signup(email, password) {
    const response = auth.createUserWithEmailAndPassword(email, password);
    const firebaseAuth = getAuth();
    sendSignInLinkToEmail(firebaseAuth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error();
        // ...
      });

    return response;
    // return auth.createUserWithEmailAndPassword(email, password);
  }
  // currentUser(변수)와 signup(함수)를 공유하기 위해 하나로 정리
  const value = {
    currentUser,
    signup,
  };
  useEffect(() => {
    // Firebase Auth 메소드 - 로그인상태가 변경되면 호출됨
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);
  // App.js등에서 공유하는 범위 지정함 (value가 공유하는 부분)
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
