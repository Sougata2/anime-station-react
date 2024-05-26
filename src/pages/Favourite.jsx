import React from "react";
import { getFavourites } from "../services/favouritesApi";

function Favourite() {
  async function dataList() {
    const favourites = await getFavourites();
    console.log(favourites);
  }
  dataList();
  return <div>Favourite</div>;
}

export default Favourite;
