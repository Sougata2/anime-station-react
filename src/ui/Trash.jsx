import React from "react";
import styled from "styled-components";
import { useDeleteFromFavourite } from "../features/Favourite/useDeleteFromFavourite";
const StyledTrash = styled.button`
  cursor: pointer;
  color: #f84444ce;
  font-size: 20px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 17px;
    bottom: 10px;
  }
`;

function Trash({ id }) {
  const { deleting, isDeleting } = useDeleteFromFavourite();
  function handleClick(e) {
    e.stopPropagation();
    if (window.confirm("Are you sure ?")) deleting(id);
  }
  return (
    <StyledTrash disabled={isDeleting} onClick={handleClick}>
      <i className="fa-solid fa-trash"></i>
    </StyledTrash>
  );
}

export default Trash;
