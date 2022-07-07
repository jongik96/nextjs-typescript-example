import type { NextPage } from "next";

import MenuBar from "../components/MenuBar";
import ReactConfirmAlert from "../components/ReactConfirmAlert";
import ReactjsPopup from "../components/ReactjsPopup";

const Modal: NextPage = () => {
  return (
    <div>
      <MenuBar />
      <div>
        <p style={{ height: "30px" }}>Modal Libarary 비교</p>
        <div style={{ height: "100px" }}>
          <ReactjsPopup />
        </div>
        <div style={{ height: "100px" }}>
          <ReactConfirmAlert />
        </div>
      </div>
    </div>
  );
};

export default Modal;
