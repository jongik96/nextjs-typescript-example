import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useScroll } from "./ScrollHook";

const NavBarActive = styled.nav`
visibility: "visible",
transition: "all 0.5s"
`;

const NavBarHidden = styled.nav`visibility: "hidden",
transition: "all 0.5s",
transform: "translateY(-100%)"
`;

export default function Navbar() {
  const { y, x, scrollDirection } = useScroll();

  return (
    <>
      {scrollDirection === "down" ? (
        <NavBarActive>
          <Link href="/" className="Header__link">
            <img
              src="../../public/favicon.ico"
              height="50px"
              width="auto"
              alt="logo"
            />
            <div className="Header__link__title">Chronology</div>
          </Link>
          <ul className="flex">
            <li>
              <Link href="/about" className="Header__link">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="Header__link">
                Blogs
              </Link>
            </li>
          </ul>
        </NavBarActive>
      ) : (
        <NavBarHidden>
          <Link href="/" className="Header__link">
            <img
              src="../../public/favicon.ico"
              height="50px"
              width="auto"
              alt="logo"
            />
            <div className="Header__link__title">Chronology</div>
          </Link>
          <ul className="flex">
            <li>
              <Link href="/about" className="Header__link">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="Header__link">
                Blogs
              </Link>
            </li>
          </ul>
        </NavBarHidden>
      )}
    </>
  );
}
