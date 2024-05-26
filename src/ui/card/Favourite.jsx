import styled from "styled-components";
import { addToFavourite, isFavourite } from "../../services/favouritesApi";
import { useEffect, useRef, useState } from "react";

const StyledFavourite = styled.div`
  position: absolute;
  right: 20px;
  bottom: 19px;
  font-size: 25px;
  color: ${({ $isFav }) => ($isFav ? "#03030373" : "#3333")};
  &:hover {
    color: #03030373;
  }
`;

function Favourite({ anime }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const ref = useRef(null);

  useEffect(function () {
    async function checkForFavourite() {
      const res = await isFavourite(anime.anilistId);
      setIsDisabled(res);
    }
    checkForFavourite();
  });

  async function handleClick() {
    if (isDisabled) alert("Already Added To Favourites!");
    ref.current.style.color = "#03030373";
    setIsDisabled(true);

    const { id, name, poster, anilistId } = anime;
    addToFavourite({ id, name, poster, anilistId });
  }
  return (
    <StyledFavourite onClick={handleClick} $isFav={isDisabled} ref={ref}>
      <i className="fa-solid fa-heart"></i>
    </StyledFavourite>
  );
}

export default Favourite;
