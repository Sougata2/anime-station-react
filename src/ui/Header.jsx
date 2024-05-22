import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.header`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
`;

const NavBrand = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

const NavItems = styled.div`
  display: flex;
  gap: 1.4rem;
`;

const NavItem = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  transition: all 300ms;
  &:link,
  &:visited {
    color: black;
  }
  &:hover {
    color: gray;
  }

  &.active:link,
  &.active:visited {
    padding: 2px 10px;
    border-radius: 8px;
    background-color: #00a9ff;
    color: white;
  }

  &.active:hover {
    background-color: #0079ff;
    color: white;
  }
`;

function Header() {
  return (
    <NavBar>
      <NavBrand>Anime Station</NavBrand>
      <NavItems>
        <NavItem to={"/home"}>Home</NavItem>
        <NavItem to={"/recent-episodes"}>Recent</NavItem>
        <NavItem to={"/favourite"}>Favourite</NavItem>
        <NavItem to={"/about"}>About</NavItem>
        <NavItem to={"/login"}>Login</NavItem>
      </NavItems>
    </NavBar>
  );
}

export default Header;
