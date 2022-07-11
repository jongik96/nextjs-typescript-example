import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
const MenuContainer = styled.div`
  position: relative;
`;

const MenuUnActive = styled.nav`
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: 0;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
`;

const MenuActive = styled.nav`
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
`;

const MenuUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuLi = styled.li`
  border-bottom: 1px solid #dddddd;
`;

const MenuLiA = styled.a`
  text-decoration: none;
  color: #333333;
  padding: 15px 20px;
  display: block;
  &:hover {
    cursor: pointer;
  }
`;

const MenuTrigger = styled.button`
  background: #ffffff;
  border-radius: 90px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  &:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }
`;

const MenuTriggerSpan = styled.span`
  font-weight: 700;
  vertical-align: middle;
  font-size: 14px;
  margin: 0 10px;
`;

export const Dropdown = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const clickLogin = () => {
    Swal.fire({
      title: "Login Form",
      html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
        <input type="password" id="password" class="swal2-input" placeholder="Password">`,
      confirmButtonText: "Sign in",
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector("#login").value;
        const password = Swal.getPopup().querySelector("#password").value;
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`);
        }
        return { login: login, password: password };
      },
    }).then((result) => {
      Swal.fire(
        `
          Login: ${result.value.login}
          Password: ${result.value.password}
        `.trim()
      );
    });
  };

  const clickTrips = () => {
    Swal.fire({
      title: "Modal Test",
      text: "sweet-alert-modal",
      icon: "success",
      confirmButtonText: "cool",
    });
  };

  const clickSave = () => {
    Swal.fire({
      title: "Modal Test",
      text: "sweet-alert-modal",
      icon: "success",
      confirmButtonText: "cool",
    });
  };

  return (
    <MenuContainer>
      <MenuTrigger onClick={onClick} className="menu-trigger">
        <MenuTriggerSpan>User</MenuTriggerSpan>
        <div
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            width: "48px",
            height: "48px",
          }}
        ></div>
      </MenuTrigger>
      {isActive ? (
        <MenuActive ref={dropdownRef}>
          <MenuUl>
            <MenuLi>
              <MenuLiA onClick={clickLogin}>Login</MenuLiA>
            </MenuLi>
            <MenuLi>
              <MenuLiA onClick={clickTrips}>Trips</MenuLiA>
            </MenuLi>
            <MenuLi>
              <MenuLiA onClick={clickSave}>Saved</MenuLiA>
            </MenuLi>
          </MenuUl>
        </MenuActive>
      ) : (
        <MenuUnActive ref={dropdownRef}>
          <MenuUl>
            <MenuLi>
              <MenuLiA onClick={clickLogin}>Login</MenuLiA>
            </MenuLi>
            <MenuLi>
              <MenuLiA onClick={clickTrips}>Trips</MenuLiA>
            </MenuLi>
            <MenuLi>
              <MenuLiA onClick={clickSave}>Saved</MenuLiA>
            </MenuLi>
          </MenuUl>
        </MenuUnActive>
      )}
    </MenuContainer>
  );
};
