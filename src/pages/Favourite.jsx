import { useFavourites } from "../features/Favourite/useFavourites";

import FavouriteAnime from "../ui/FavouriteAnime";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import List from "../ui/List";

function Favourite() {
  const { isPending, isRefetching, data } = useFavourites();
  if (isPending || isRefetching) return <Spinner />;
  return (
    <>
      <Heading>Favourites</Heading>
      <List>
        {data.map((anime) => (
          <FavouriteAnime anime={anime} key={anime.anilistId} />
        ))}
      </List>
    </>
  );
}

export default Favourite;
