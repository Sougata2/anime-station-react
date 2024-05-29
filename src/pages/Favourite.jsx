import { useFavourites } from "../features/Favourite/useFavourites";

import FavouriteAnime from "../ui/FavouriteAnime";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Filters from "../ui/Filters";

function Favourite() {
  const { isPending, isRefetching, data } = useFavourites();
  if (isPending || isRefetching) return <Spinner />;
  return (
    <>
      <Heading>Favourites</Heading>
      <Filters>
        <Filters.Menu>
          <Filters.Button operation={"sort-desc"}>Newest</Filters.Button>
          <Filters.Button operation={"sort-asc"}>Older</Filters.Button>
        </Filters.Menu>
        <Filters.Window
          data={data}
          render={(anime) => (
            <FavouriteAnime anime={anime} key={anime.anilistId} />
          )}
        />
      </Filters>
    </>
  );
}

export default Favourite;
