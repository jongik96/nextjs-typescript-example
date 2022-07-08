import type { NextPage } from "next";

import MenuBar from "../components/MenuBar";
import UIWContainer from "../components/UIWContainer";

const MarkdownEditor: NextPage = () => {
  return (
    <div>
      <MenuBar />
      <div>
        <p>UIW MarkDown Editor</p>
        <UIWContainer />
      </div>
    </div>
  );
};

export default MarkdownEditor;
