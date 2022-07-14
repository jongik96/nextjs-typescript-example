import { useScrollDirection } from "./useScrollDirection";
import styled from "styled-components";

const Header = styled.div`
  position: sticky;
  top: 0px;
  background-color: #bfdbfe;
  height: 6rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
`;

const HeaderDown = styled.div`
  top: -6rem;
`;

const NavBar = () => {
  const scrollDirection = useScrollDirection();

  return (
    <>
      {scrollDirection === "down" && (
        <HeaderDown>DisappearingHeader</HeaderDown>
      )}
      {scrollDirection !== "down" && <Header>DisappearingHeader</Header>}
    </>
  );
};

export default NavBar;
