import type { NextPage } from "next";
import React, { useState } from "react";

const SelectBox: NextPage = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div>SelectBox + TypeScript</div>
      <div>
        <select onChange={(e) => handleChange(e)}>
          <option key="A" value="A">
            A
          </option>
          <option key="B" value="B">
            B
          </option>
          <option key="C" value="C">
            C
          </option>
          <option key="D" value="D">
            D
          </option>
        </select>
      </div>
      <div>selected : {value}</div>
    </div>
  );
};

export default SelectBox;
