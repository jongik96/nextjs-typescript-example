import type { NextPage } from "next";
import MenuBar from "../components/MenuBar";
import { GetServerSideProps } from "next";
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

const Hook: NextPage = (data) => {
  const [userData, setUserData] = useState<User[]>([]);
  useEffect(() => {
    setUserData(data.data);
    console.log("useEffect : ", data.data);
    console.log("test : ", userData);
  }, [userData]);
  return (
    <div>
      <MenuBar />
      <div>Hook + TypeScript</div>
      <ul>
        {userData &&
          userData.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return { props: { data: data } };
};

export default Hook;
