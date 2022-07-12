import type { NextPage } from "next";
import MenuBar from "../components/MenuBar";
import { fetchUser } from "./api";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: any;
  company: any;
}

const ApiTest: NextPage = () => {
  const [userData, setUserData] = useState([] as any);
  useEffect(() => {
    async function getUserData() {
      const response = await fetchUser();
      console.log("result" + response.data);
      setUserData(response.data);
      console.log(userData);

      //   setUserData(result);
    }
    getUserData();
  }, []);

  return (
    <div>
      <MenuBar />
      <div>Hook + TypeScript</div>
      <ul>
        {userData &&
          userData.map((item: any) => {
            return <li key={item.id}>{item.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default ApiTest;
