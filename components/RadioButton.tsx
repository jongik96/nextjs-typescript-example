import type { NextPage } from "next";
import { useState } from "react";

const RadioButton: NextPage = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div>RadioButton + TypeScript</div>
      <div>
        <form>
          <label htmlFor="A">A</label>
          <input type="radio" value="A" id="A" onChange={handleChange} />
          <label htmlFor="B">B</label>
          <input type="radio" value="B" id="B" onChange={handleChange} />
          <label htmlFor="C">C</label>
          <input type="radio" value="C" id="C" onChange={handleChange} />
        </form>
      </div>
      <div>Selected : {value}</div>
    </div>
  );
};

export default RadioButton;
