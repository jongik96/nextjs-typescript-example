import NavBar from "../components/navbar/NavBar";

const HideNavBar = () => {
  return (
    <>
      <NavBar />
      <div>
        <h1>상단 메뉴바 숨기기</h1>
        {Array.from({ length: 60 }).map(function (u, i) {
          return (
            <p key={i}>
              스크롤을 내릴때는 메뉴바가 사라지고 스크롤을 올릴때는 메뉴바가
              보입니다.
            </p>
          );
        })}
      </div>
    </>
  );
};

export default HideNavBar;
