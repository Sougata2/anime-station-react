import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RecentAnime from "./pages/RecentAnime";
// import { RecentAnimeProvider } from "./contexts/RecentAnimeContext";
import AboutAnime from "./pages/AboutAnime";
import { AnimeProvider } from "./contexts/AnimeContext";

function App() {
  return (
    <AnimeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="recent" />} />
          <Route path="recent" element={<RecentAnime />} />
          <Route path="anime/:id" element={<AboutAnime />} />
        </Routes>
      </BrowserRouter>
    </AnimeProvider>
  );
}

export default App;
