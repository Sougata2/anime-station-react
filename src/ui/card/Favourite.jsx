import { useEffect, useRef, useState } from "react";
import { addToFavourite, isFavourite } from "../../services/favouritesApi";
import { useAnimeInfo } from "../../features/AnimeInfo/useAnime";

import styled from "styled-components";

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

function Favourite() {
  const { data: { anime: { info = {} } = {} } = {} } = useAnimeInfo();
  const [isDisabled, setIsDisabled] = useState(false);
  const ref = useRef(null);

  useEffect(function () {
    async function checkForFavourite() {
      const res = await isFavourite(info.anilistId);
      setIsDisabled(res);
    }
    checkForFavourite();
  });

  async function handleClick() {
    if (isDisabled) alert("Already Added To Favourites!");
    ref.current.style.color = "#03030373";
    setIsDisabled(true);

    const { id, name, poster, anilistId } = info;
    const time = Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    }).format(new Date());
    const timeStamp = new Date(time).toISOString();
    addToFavourite({ id, name, poster, anilistId, timeStamp });
  }
  return (
    <StyledFavourite onClick={handleClick} $isFav={isDisabled} ref={ref}>
      <i className="fa-solid fa-heart"></i>
    </StyledFavourite>
  );
}

export default Favourite;
