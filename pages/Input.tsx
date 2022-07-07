import type { NextPage } from "next";

import MenuBar from "../components/MenuBar";
import InputEvent from "../components/InputEvent";
import SelectBox from "../components/SelectBox";
import RadioButton from "../components/RadioButton";
import CheckBox from "../components/CheckBox";
import TabMovement from "../components/TabMovement";

const Input: NextPage = () => {
  return (
    <div>
      <MenuBar />
      <div>
        <div style={{ height: "100px" }}>
          <InputEvent />
        </div>
        <div style={{ height: "100px" }}>
          <SelectBox />
        </div>
        <div style={{ height: "100px" }}>
          <RadioButton />
        </div>
        <div style={{ height: "100px" }}>
          <CheckBox />
        </div>
        <div style={{ height: "100px" }}>
          <TabMovement />
        </div>
      </div>
    </div>
  );
};

export default Input;
