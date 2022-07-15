import type { NextPage } from "next";

import MenuBar from "../components/MenuBar";

const Login: NextPage = () => {
  return (
    <div>
      <MenuBar />
      <div>
        <label htmlFor="email">Email : </label>
        <input type="text" id="email" name="password" />
        <label htmlFor="password">Password : </label>
        <input type="password" id="password" name="password" />
      </div>
    </div>
  );
};

export default Login;
