import React from "react";
import { useFavourites } from "../features/Favourite/useFavourites";
import List from "../ui/List";
import Spinner from "../ui/Spinner";

function Favourite() {
  const { isPending, isRefetching, data, error } = useFavourites();
  if (isPending || isRefetching) return <Spinner />;
  return (
    <List>
      {data.map((anime) => (
        <>
          <div>{anime.name}</div>
          <br />
        </>
      ))}
    </List>
  );
}

export default Favourite;
