import type { NextPage } from "next";
import { useCallback, useState } from "react";

import MenuBar from "../components/MenuBar";
import UIW from "../components/UIW";

type PageProps = {};

const MarkdownEditor: NextPage<PageProps> = ({}) => {
  const [value, setValue] = useState("");
  const handleChange = useCallback((value) => {
    setValue(value);
  }, []);
  return (
    <div>
      <MenuBar />
      <div>
        <UIW value={value} onChange={handleChange} />
      </div>
    </div>
  );
};

export default MarkdownEditor;
