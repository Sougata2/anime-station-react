import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RecentAnime from "./pages/RecentAnime";
import { RecentAnimeProvider } from "./contexts/RecentAnimeContext";
import AboutAnime from "./pages/AboutAnime";
import { AnimeProvider } from "./contexts/AnimeContext";

function App() {
  return (
    <BrowserRouter>
      <RecentAnimeProvider>
        <Routes>
          <Route index element={<Navigate to="recent" />} />
          <Route path="recent" element={<RecentAnime />} />
        </Routes>
      </RecentAnimeProvider>
      <AnimeProvider>
        <Routes>
          <Route path="anime/:id" element={<AboutAnime />} />
        </Routes>
      </AnimeProvider>
    </BrowserRouter>
  );
}

export default App;
