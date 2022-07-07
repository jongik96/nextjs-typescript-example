import type { NextPage } from "next";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
const ReactConfirmAlert: NextPage = () => {
  const submit = () => {
    confirmAlert({
      title: "로그아웃 하시겠습니까?", // Title dialog// Message dialog
      childrenElement: () => <div>Custom UI</div>, // Custom UI or Component
      confirmLabel: "네", // Text button confirm
      cancelLabel: "아니요", // Text button cancel
      onConfirm: () => alert("Action after Confirm"), // Action after Confirm
      onCancel: () => alert("Action after Cancel"), // Action after Cancel
      overlayClassName: "overlay-custom-class-name", // Custom overlay class name
    });
  };
  return (
    <div>
      <div>ReactConfirmAlert + TypeScript</div>
      <div>
        React-Confirm-Alert
        <button onClick={submit}>모달창열기</button>
      </div>
    </div>
  );
};

export default ReactConfirmAlert;
