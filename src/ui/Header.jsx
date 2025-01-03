import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { auth } from "../services/fireStore";
import { onAuthStateChanged } from "firebase/auth";

const NavBar = styled.div`
  font-family: "Poetsen One", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e384ff;
  color: white;
  padding: 0 2rem;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 400ms linear;
    /* Conditionally give height and let the overflow be hidden
    because if ample height is given then there will be no overflow */
    height: ${({ $isvisible }) => ($isvisible ? "220px" : "55px")};
    overflow: hidden;
  }
`;
const NavBrand = styled.p`
  position: relative;
  font-size: 2rem;
  margin: 0;
  @media (max-width: 800px) {
    margin: 0.5rem 0;
  }
`;
const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0;
  transition: all 500ms ease-in-out;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0.3rem;
  }
`;
const NavItem = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 1px 10px;
  border-radius: 10px;
  transition: all 500ms ease-in-out;
  &:hover {
    background-color: white;
    color: #e384ff;
  }
  &.active {
    background-color: white;
    color: #e384ff;
  }
  @media (max-width: 800px) {
    display: flex;
  }
`;

const ToggleBtn = styled.div`
  cursor: pointer;
  @media (max-width: 800px) {
    position: absolute;
    top: 1.2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 30px;
    height: 21px;
  }
`;
const Bar = styled.span`
  height: 4px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
`;
function Header() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(function () {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);
  return (
    <NavBar $isvisible={isOpen}>
      <NavBrand>Anime Station</NavBrand>
      <ToggleBtn onClick={(e) => setIsOpen(!isOpen)}>
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
      </ToggleBtn>
      <NavItems onClick={(e) => setIsOpen(!isOpen)}>
        <NavItem to={"/"}>Home</NavItem>
        <NavItem to={"/recent-episodes"}>Recent</NavItem>
        <NavItem to={"/favourite"}>Favourite</NavItem>
        <NavItem to={"/search"}>Search</NavItem>
        <NavItem to={"/login"}>{user ? "Profile" : "Login"}</NavItem>
      </NavItems>
    </NavBar>
  );
}

export default Header;
