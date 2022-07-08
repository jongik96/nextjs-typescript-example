import type { NextPage } from "next";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
const SweetAlert = () => {
  const clickBtn3 = () => {
    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
  };
  const clickBtn = () => {
    Swal.fire({
      title: "Modal Test",
      text: "sweet-alert-modal",
      icon: "success",
      confirmButtonText: "cool",
    });
  };
  const clickBtn2 = () => {
    Swal.fire({
      title: "Modal Test2",
      text: "sweet-alert-modal",
      icon: "question",
      confirmButtonText: "cool",
      showDenyButton: "true",
      //   denyButtonText: "No",
    });
  };
  return (
    <div>
      <div>Sweet Alert Modal</div>
      <div>
        <button onClick={clickBtn}>알림팝업</button>
        <button onClick={clickBtn2}>질문팝업</button>
        <button onClick={clickBtn3}>우측상단 알림</button>
      </div>
    </div>
  );
};

export default SweetAlert;
