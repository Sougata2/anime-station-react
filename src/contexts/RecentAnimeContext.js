import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "https://api-aniwatch.onrender.com/anime/schedule?date=";

const AnimeContext = createContext();
const initialState = {
  animeList: {},
  date: null,
  page: 0,
  isLoading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataLoading":
      return { ...state, isLoading: true };
    case "nextPage":
      return { ...state, page: state.page + 1, isLoading: false };
    case "prevPage":
      return { ...state, page: state.page - 1, isLoading: false };
    case "setDate":
      return { ...state, date: action.payload };
    case "setAnimeList":
      return { ...state, animeList: action.payload, isLoading: false };
    default:
      throw new Error("Unknown Action taken");
  }
}

function RecentAnimeProvider({ children }) {
  const [{ animeList, page, isLoading, date }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function getUrl(offset = 0) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + offset);
    const [month, date, year] = currentDate
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/");
    dispatch({ type: "setDate", payload: `${year}-${month}-${date}` });
    return `${BASE_URL}${year}-${month}-${date}`;
  }

  function nextPage() {
    dispatch({ type: "nextPage" });
  }

  function prevPage() {
    dispatch({ type: "prevPage" });
  }

  function setAnimeList(payload) {
    dispatch({ type: "setAnimeList", payload: payload });
  }
  useEffect(
    function () {
      dispatch({ type: "dataLoading" });
      async function getAnimeList() {
        const res = await fetch(getUrl(page));
        const data = await res.json();
        setAnimeList(data);
      }
      getAnimeList();
    },
    [page]
  );
  return (
    <AnimeContext.Provider
      value={{ animeList, isLoading, nextPage, prevPage, date }}
    >
      {children}
    </AnimeContext.Provider>
  );
}

function useRecentAnime() {
  const context = useContext(AnimeContext);
  if (context === undefined)
    throw new Error("useAnime must be used within a AnimeProvider");
  return context;
}

export { RecentAnimeProvider, useRecentAnime };
