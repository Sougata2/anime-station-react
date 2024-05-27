import React from "react";
import { useFavourites } from "../features/Favourite/useFavourites";
import List from "../ui/List";
import Spinner from "../ui/Spinner";
import FavouriteAnime from "../ui/FavouriteAnime";
import Heading from "../ui/Heading";

function Favourite() {
  const { isPending, isRefetching, data } = useFavourites();
  if (isPending || isRefetching) return <Spinner />;
  return (
    <>
      <Heading>Favourites 💜</Heading>
      <List>
        {data.map((anime) => (
          <FavouriteAnime anime={anime} key={anime.anilistId} />
        ))}
      </List>
    </>
  );
}

export default Favourite;
