import React, { useState } from "react";

function InputEvent() {
  const [form, setForm] = useState({
    id: "",
    password: "",
  });

  const { id, password } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <label>Id </label>
        <input type="text" name="id" value={id} onChange={onChange} />
      </div>
      <div>
        <label>Password </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <div>
        {id} {password}
      </div>
    </div>
  );
}

export default InputEvent;
