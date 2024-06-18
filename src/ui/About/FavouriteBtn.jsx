import { useAddToFavourite } from "../../features/Favourite/useAddToFavourite";
import { useInFavourites } from "../../features/Favourite/useInFavourites";
import { getFormattedTime } from "../../helper/format";

function FavouriteBtn({ data }) {
  const isFavourite = useInFavourites(data.id);
  const { add, isAdding } = useAddToFavourite();

  function handleClick() {
    const timeStamp = getFormattedTime();
    add({ ...data, timeStamp });
  }
  
  if (isFavourite) return null;
  return (
    <button onClick={handleClick} disabled={isAdding}>
      Add To Favourite
    </button>
  );
}

export default FavouriteBtn;
