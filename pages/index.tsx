import type { NextPage } from "next";
import MenuBar from "../components/MenuBar";

const Home: NextPage = () => {
  return (
    <div>
      <MenuBar />
      <div>TypeScript 연습</div>
    </div>
  );
};

export default Home;
