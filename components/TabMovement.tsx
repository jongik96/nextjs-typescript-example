import type { NextPage } from "next";
import { useState } from "react";

const TabMovement: NextPage = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div>Tab 키 이동위치 지정하기 + TypeScript</div>
      <div>
        <label>ID</label>
        <input tabIndex={1} type="text" /> 1
      </div>
      <div>
        <label>Password</label>
        <input tabIndex={4} type="password" /> 4
      </div>
      <div>
        <label>Name</label>
        <input tabIndex={3} type="text" /> 3
      </div>
      <div>
        <label>PhoneNumber</label>
        <input tabIndex={2} type="text" /> 2
      </div>
    </div>
  );
};

export default TabMovement;
