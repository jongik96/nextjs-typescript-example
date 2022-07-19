import type { NextPage } from "next";
import MenuBar from "../components/MenuBar";

const Home: NextPage = () => {
  return (
    <div>
      <MenuBar />
      <div>로그인 완료!!</div>
    </div>
  );
};

export default Home;
