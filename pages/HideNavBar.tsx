import MenuBar from "../components/MenuBar";
import NavBar from "../components/navbar/NavBar";

const HideNavBar = () => {
  return (
    <>
      <MenuBar />
      <NavBar />
      <div>
        <h1>Hello, World</h1>
        {Array.from({ length: 60 }).map(function (u, i) {
          return (
            <p key={i}>
              This page has a sticky disappearing header. Scroll down and it
              will disappear from view. Scroll up and it will reappear like
              magic.
            </p>
          );
        })}
      </div>
    </>
  );
};

export default HideNavBar;
