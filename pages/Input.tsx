import type { NextPage } from "next";

import MenuBar from "../components/MenuBar";
import InputEvent from "../components/inputs/InputEvent";
import SelectBox from "../components/inputs/SelectBox";
import RadioButton from "../components/inputs/RadioButton";
import CheckBox from "../components/inputs/CheckBox";
import TabMovement from "../components/inputs/TabMovement";
import TagInput from "../components/inputs/TagInput";

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
        <div style={{ height: "100px" }}>
          <TagInput />
        </div>
      </div>
    </div>
  );
};

export default Input;
