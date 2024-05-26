import styled from "styled-components";
import { addToFavourite } from "../../services/favouritesApi";

const StyledFavourite = styled.div`
  position: absolute;
  right: 20px;
  bottom: 19px;
  font-size: 25px;
  color: #3333;
  &:hover {
    color: #03030373;
  }
`;

function Favourite({ anime }) {
  function handleClick() {
    console.log(anime);
    addToFavourite(anime);
  }
  return (
    <StyledFavourite onClick={handleClick}>
      <i className="fa-solid fa-heart"></i>
    </StyledFavourite>
  );
}

export default Favourite;
