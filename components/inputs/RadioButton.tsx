import type { NextPage } from "next";
import { useState } from "react";

const RadioButton: NextPage = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    if (e.target.value == value) {
      console.log("uncheck" + e.target.value);
      setValue("");
    } else {
      setValue(e.target.value);
      console.log("check" + e.target.value);
    }
  };
  return (
    <div>
      <div>RadioButton + TypeScript</div>
      <div>
        <form>
          <label htmlFor="A">A</label>
          <input
            type="radio"
            value="A"
            name="A"
            id="A"
            onChange={handleChange}
          />
          <label htmlFor="B">B</label>
          <input
            type="radio"
            value="B"
            name="B"
            id="B"
            onChange={handleChange}
          />
          <label htmlFor="C">C</label>
          <input
            type="radio"
            value="C"
            name="C"
            id="C"
            onChange={handleChange}
          />
        </form>
      </div>
      <div>Selected : {value}</div>
    </div>
  );
};

export default RadioButton;
