import { createContext, useContext, useEffect, useState } from "react";
import { sortAnime } from "../helper/filters";

import styled, { css } from "styled-components";
import List from "./List";

const StyledMenu = styled.div`
  background-color: #3333331d;
  padding: 1px 0px 1px 0px;
  border-radius: 11px;
  position: absolute;
  top: 16px;
  right: 78px;
  display: flex;
  gap: 15px;
  @media (max-width: 800px) {
    right: 10px;
  }
`;

const StyledButton = styled.button`
  font-family: "Poetsen One", sans-serif;
  font-size: 15px;
  color: #3333339d;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  border: none;
  transition: all 500ms;
  ${({ $active }) =>
    $active &&
    css`
      background-color: #e384ff;
      color: white;
    `}
`;

const FilterContext = createContext();

function Filters({ children }) {
  const [data, setData] = useState([]);
  const [label, setLabel] = useState("");
  return (
    <FilterContext.Provider value={{ data, setData, label, setLabel }}>
      {children}
    </FilterContext.Provider>
  );
}

function Window({ data, render }) {
  const { setData } = useContext(FilterContext);

  useEffect(function () {
    setData(data);
  });

  return <List>{data.map(render)}</List>;
}

function Menu({ children }) {
  return <StyledMenu>{children}</StyledMenu>;
}

function Button({ operation, children }) {
  const { setData, label, setLabel } = useContext(FilterContext);
  function handleClick() {
    switch (operation) {
      case "sort-asc":
        setLabel("sort-asc");
        setData((data) => [...sortAnime(data)]);
        break;
      case "sort-desc":
        setLabel("sort-desc");
        setData((data) => [...sortAnime(data, "desc")]);
        break;
      default:
        throw new Error("Unknown operation!");
    }
  }
  return (
    <StyledButton onClick={handleClick} $active={operation === label}>
      {children}
    </StyledButton>
  );
}

Filters.Menu = Menu;
Filters.Button = Button;
Filters.Window = Window;

export default Filters;
