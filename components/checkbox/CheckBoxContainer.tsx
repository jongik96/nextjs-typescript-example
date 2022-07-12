import { useState } from "react";
import CheckBoxItem from "./CheckBoxItem";

const CheckBoxContainer = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const datas: { title: string; time: string; index: number }[] = [
    { title: "월요일", time: "19:00 ~ 22:00", index: 1 },
    { title: "화요일", time: "19:00 ~ 22:00", index: 2 },
    { title: "수요일", time: "19:00 ~ 22:00", index: 3 },
    { title: "목요일", time: "19:00 ~ 22:00", index: 4 },
    { title: "금요일", time: "19:00 ~ 22:00", index: 5 },
    { title: "토요일", time: "14:00 ~ 17:00", index: 6 },
    { title: "일요일", time: "14:00 ~ 17:00", index: 7 },
  ];

  const checkedItemHandler = (code: any, isChecked: any) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, code]);
    } else if (!isChecked && checkedItems.find((one) => one === code)) {
      const filter = checkedItems.filter((one) => one !== code);
      setCheckedItems([...filter]);
    }
  };

  const onCheckAll = (checked: any) => {
    if (checked) {
      const checkedItemsArray: any = [];
      datas.forEach((data) => checkedItemsArray.push(data.title));
      setCheckedItems(checkedItemsArray);
    } else {
      setCheckedItems([]);
    }
  };

  return (
    <>
      <label onClick={onCheckAll}>
        <input
          type="checkbox"
          name="practice"
          onChange={(e) => onCheckAll(e.target.checked)}
          className="hidden"
        />
        {/* Image */}
        <h2>모두 선택</h2>
      </label>
      <div>
        {datas.map((data) => (
          <CheckBoxItem
            key={data.index}
            data={data.title}
            checkedItems={checkedItems}
            checkedItemHandler={checkedItemHandler}
          ></CheckBoxItem>
        ))}
      </div>
    </>
  );
};

export default CheckBoxContainer;
