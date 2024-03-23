import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";

const AnimeContext = createContext();
const initialState = {
  animeList: [],
  date: null,
  page: 0,
  currentAnime: {},
  isLoading: false,
  error: null,
};

const ANIME_INFO_BASE_URL = "https://api-aniwatch.onrender.com/anime/info?id=";
const RECENT_ANIME_BASE_URL =
  "https://api-aniwatch.onrender.com/anime/schedule?date=";

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
    case "setAnime":
      return { ...state, currentAnime: action.payload, isLoading: false };
    default:
      throw new Error("Unknown Action taken");
  }
}
function AnimeProvider({ children }) {
  const [{ animeList, date, page, currentAnime, isLoading, error }, dispatch] =
    useReducer(reducer, initialState);

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
    return `${RECENT_ANIME_BASE_URL}${year}-${month}-${date}`;
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

  const getAnime = useCallback(async function getAnime(id) {
    dispatch({ type: "dataLoading" });
    try {
      const res = await fetch(ANIME_INFO_BASE_URL + id);
      const data = await res.json();
      dispatch({ type: "setAnime", payload: data });
    } catch (err) {
      console.error(err);
    }
  }, []);

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
      value={{
        currentAnime,
        animeList,
        date,
        isLoading,
        nextPage,
        prevPage,
        getAnime,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}

function useAnime() {
  const context = useContext(AnimeContext);
  if (context === undefined)
    throw new Error("useAnime must be used within a AnimeProvider");
  return context;
}

export { AnimeProvider, useAnime };
