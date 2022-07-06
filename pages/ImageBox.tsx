import type { NextPage } from "next";

import ImagePreview from "../components/ImagePreview";
import MenuBar from "../components/MenuBar";

const ImageBox: NextPage = () => {
  return (
    <div>
      <MenuBar />
      <ImagePreview />
    </div>
  );
};

export default ImageBox;
