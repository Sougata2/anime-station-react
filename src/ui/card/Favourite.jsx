import { useEffect, useRef, useState } from "react";
import { useAddToFavourite } from "../../features/Favourite/useAddToFavourite";
import { useInFavourites } from "../../features/Favourite/useInFavourites";
import { useCurrentAnime } from "../../features/AnimeInfo/useAnime";

import styled from "styled-components";
import toast from "react-hot-toast";

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
  const { data: { anime: { info = {} } = {} } = {} } = useCurrentAnime();
  const isFavourite = useInFavourites(info.anilistId);
  const { add } = useAddToFavourite();

  const [isDisabled, setIsDisabled] = useState(false);
  const ref = useRef(null);

  useEffect(
    function () {
      if (isFavourite) setIsDisabled(true);
    },
    [isFavourite]
  );

  function handleClick() {
    if (isDisabled) return toast.error("Already Added To Favourites");

    const { id, name, poster, anilistId } = info;
    ref.current.style.color = "#03030373";
    setIsDisabled(true);

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

    add({ id, name, poster, anilistId, timeStamp });
  }
  return (
    <StyledFavourite onClick={handleClick} $isFav={isDisabled} ref={ref}>
      <i className="fa-solid fa-heart"></i>
    </StyledFavourite>
  );
}

export default Favourite;
