import type { NextPage } from "next";
import { Dropdown } from "../components/dropdown/DropDown";

import MenuBar from "../components/MenuBar";

const DropdownMenu: NextPage = () => {
  return (
    <div>
      <MenuBar />
      <Dropdown />
    </div>
  );
};

export default DropdownMenu;
