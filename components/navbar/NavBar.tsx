import { useScrollDirection } from "./useScrollDirection";
import styled from "styled-components";
import Link from "next/link";

const Header = styled.div`
  position: sticky;
  top: 0px;
  background-color: #bfdbfe;
  height: 3rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
`;

const HeaderDown = styled.div`
  top: -3rem;
`;

const NavBar = () => {
  const scrollDirection = useScrollDirection();

  return (
    <>
      {scrollDirection === "down" && (
        <HeaderDown>
          <Link href="/"> Home</Link> |<Link href="/Input"> Input Example</Link>{" "}
          |<Link href="/ImageBox"> Image Upload Example</Link> |
          <Link href="/Hook"> Hook Example</Link> |
          <Link href="/ApiTest"> axios TypeScript</Link> |
          <Link href="/DropdownMenu"> Dropdown Menu </Link> |
          <Link href="/CheckBox"> CheckBox </Link> |
          <Link href="/Modal"> Modal </Link> |
          <Link href="/MarkdownEditor"> MarkDown Editor </Link> |
          <Link href="/TabPage"> Tab Page </Link> |
          <Link href="/HideNavBar"> Hide NavBar </Link> |
          <Link href="/ScrollRestoration"> Scroll restoration </Link> |
        </HeaderDown>
      )}
      {scrollDirection !== "down" && (
        <Header>
          <Link href="/"> Home</Link> |<Link href="/Input"> Input Example</Link>{" "}
          |<Link href="/ImageBox"> Image Upload Example</Link> |
          <Link href="/Hook"> Hook Example</Link> |
          <Link href="/ApiTest"> axios TypeScript</Link> |
          <Link href="/DropdownMenu"> Dropdown Menu </Link> |
          <Link href="/CheckBox"> CheckBox </Link> |
          <Link href="/Modal"> Modal </Link> |
          <Link href="/MarkdownEditor"> MarkDown Editor </Link> |
          <Link href="/TabPage"> Tab Page </Link> |
          <Link href="/HideNavBar"> Hide NavBar </Link> |
          <Link href="/ScrollRestoration"> Scroll restoration </Link> |
        </Header>
      )}
    </>
  );
};

export default NavBar;
