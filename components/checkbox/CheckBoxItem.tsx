import React, { useState, useEffect } from "react";

const CheckBoxItem = ({ data, checkedItems, checkedItemHandler }: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const onCheck = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    checkedItemHandler(target.value, target.checked);
    setIsChecked(target.checked);
  };

  useEffect(() => {
    if (checkedItems.includes(data)) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [checkedItems]);

  return (
    <>
      <label key={data}>
        <input
          type="checkbox"
          name="practice"
          checked={isChecked}
          value={data}
          onChange={(e) => onCheck(e)}
          className="hidden"
        />
        <span>{data}</span>
      </label>
    </>
  );
};

export default CheckBoxItem;
