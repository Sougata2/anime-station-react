import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecentAnime from "./pages/RecentAnime";
import { RecentAnimeProvider } from "./contexts/RecentAnimeContext";

function App() {
  return (
    <BrowserRouter>
      <RecentAnimeProvider>
        <Routes>
          <Route index element={<RecentAnime />} />
          <Route path="/recent" element={<RecentAnime />} />
        </Routes>
      </RecentAnimeProvider>
    </BrowserRouter>
  );
}

export default App;
