import type { NextPage } from "next";
import { useState } from "react";
import Popup from "reactjs-popup";

const Modal = () => (
  <Popup trigger={<button>Trigger</button>} position="top left">
    {(close) => (
      <div>
        Content here
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);
const ReactjsPopup: NextPage = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div>ReactjsPopup + TypeScript</div>
      <div>
        React-js-popup
        <Modal></Modal>
      </div>
    </div>
  );
};

export default ReactjsPopup;
