import { createContext, useContext, useReducer } from "react";

const AnimeContext = createContext();
const initialState = {
  currentAnime: {},
  isLoading: false,
};

const BASE_URL = "https://api-aniwatch.onrender.com/anime/info?id=";

function reducer(state, action) {
  switch (action.type) {
    case "dataLoading":
      return { ...state, isLoading: true };
    case "setAnime":
      return { ...state, currentAnime: action.payload, isLoading: false };
    default:
      throw new Error("Unknown Action taken");
  }
}
function AnimeProvider({ children }) {
  const [{ currentAnime, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function getAnime(id) {
    async function fetchAnime() {
      dispatch({ type: "dataLoading" });
      try {
        const res = await fetch(BASE_URL + id);
        const data = await res.json();
        dispatch({ type: "setAnime", payload: data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchAnime();
  }

  return (
    <AnimeContext.Provider value={{ currentAnime, isLoading, getAnime }}>
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
