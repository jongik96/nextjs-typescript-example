import type { NextPage } from "next";

import MenuBar from "../components/MenuBar";
import InputEvent from "../components/inputEvent";
import SelectBox from "../components/SelectBox";
import RadioButton from "../components/RadioButton";

const Input: NextPage = () => {
  return (
    <div>
      <MenuBar />
      <InputEvent />
      <SelectBox />
      <RadioButton />
    </div>
  );
};

export default Input;
