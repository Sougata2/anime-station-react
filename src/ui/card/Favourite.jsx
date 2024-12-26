import { useEffect, useRef, useState } from "react";
import { useAddToFavourite } from "../../features/Favourite/useAddToFavourite";
import { getFormattedTime } from "../../helper/format";
import { useInFavourites } from "../../features/Favourite/useInFavourites";
import { useAnimeCard } from "../../features/AnimeInfo/useAnime";

import styled from "styled-components";
import toast from "react-hot-toast";
import { auth } from "../../services/fireStore";

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

function Favourite({ animeId }) {
  const { data: { data: { anime: { info = {} } = {} } = {} } = {} } =
    useAnimeCard(animeId);
  const isFavourite = useInFavourites(info.id);
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
    if (!auth.currentUser) return toast.error("Login required!");
    if (isDisabled) return toast.error("Already Added To Favourites");

    const { id, name, poster, anilistId } = info;
    ref.current.style.color = "#03030373";
    setIsDisabled(true);
    const timeStamp = getFormattedTime();
    add({ id, name, poster, anilistId, timeStamp });
  }
  return (
    <StyledFavourite onClick={handleClick} $isFav={isDisabled} ref={ref}>
      <i className="fa-solid fa-heart"></i>
    </StyledFavourite>
  );
}

export default Favourite;
