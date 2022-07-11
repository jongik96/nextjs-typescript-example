import type { NextPage } from "next";
import { useCallback, useState } from "react";

import UIW from "./UIW";

type PageProps = {};

const UIWContainer: NextPage<PageProps> = ({}) => {
  const [value, setValue] = useState("");
  const handleChange = useCallback((value) => {
    setValue(value);
  }, []);
  return <UIW value={value} onChange={handleChange} />;
};

export default UIWContainer;
