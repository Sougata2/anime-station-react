import { createContext, useContext, useReducer } from "react";
import { useModalContext } from "../Modal/Modal";

import CardImage from "../../ui/CardImage";
import CardTtitle from "../../ui/CardTtitle";
import Card from "../../ui/Card";

const initialState = {
  isLoading: false,
  data: {},
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "loaded":
      return { ...state, isLoading: false, data: action.payload };
    default:
      throw new Error("Unknown Action in AnimeContext");
  }
}

const AnimeContext = createContext();

function AnimeInfo({ id, children }) {
  const [{ isLoading, data }, dispatch] = useReducer(reducer, initialState);
  return (
    <AnimeContext.Provider value={{ isLoading, data, dispatch }}>
      {children}
    </AnimeContext.Provider>
  );
}

function useAnimeContext() {
  const context = useContext(AnimeContext);
  return context;
}

function AnimeCard({ children }) {
  const { isOpen } = useModalContext();
  return isOpen && <Card>{children}</Card>;
}

function AnimeTitle() {
  const {
    data: {
      anime: {
        info: { name },
      },
    },
  } = useAnimeContext(AnimeContext);
  return <CardTtitle>{name}</CardTtitle>;
}
function AnimeImage() {
  const {
    data: {
      anime: {
        info: { poster },
      },
    },
  } = useAnimeContext(AnimeContext);
  return <CardImage>{poster}</CardImage>;
}

AnimeInfo.AnimeCard = AnimeCard;
AnimeInfo.AnimeTitle = AnimeTitle;
AnimeInfo.AnimeImage = AnimeImage;

export { useAnimeContext };

export default AnimeInfo;
