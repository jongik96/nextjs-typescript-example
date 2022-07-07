import type { NextPage } from "next";
import { useState } from "react";

const CheckBox: NextPage = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div>CheckBox + TypeScript</div>
      <div>
        <input type="checkbox" value="A" />

        <input type="checkbox" value="B" />

        <input type="checkbox" value="C" />
      </div>
    </div>
  );
};

export default CheckBox;
