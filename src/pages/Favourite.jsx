import { useFavourites } from "../features/Favourite/useFavourites";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../services/fireStore";

import FavouriteAnime from "../ui/FavouriteAnime";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Filters from "../ui/Filters";

function Favourite() {
  const navigate = useNavigate();
  const { isPending, isRefetching, data } = useFavourites();
  useEffect(
    function () {
      if (!auth.currentUser) return navigate("/login");
    },
    [navigate]
  );

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
          render={(anime) => <FavouriteAnime anime={anime} key={anime.id} />}
        />
      </Filters>
    </>
  );
}

export default Favourite;
