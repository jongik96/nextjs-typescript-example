import type { NextPage } from "next";
import { AuthProvider } from "../components/firebase/AuthContext";
import MenuBar from "../components/MenuBar";
import Signup from "../components/firebase/Signup";

const FireBaseAuth: NextPage = () => {
  return (
    <div>
      <MenuBar />
      <AuthProvider>
        <Signup />
      </AuthProvider>
    </div>
  );
};

export default FireBaseAuth;
