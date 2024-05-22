import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./ui/AppLayout";
import RecentEpisodes from "./pages/RecentEpisodes";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import About from "./pages/About";
import Login from "./pages/Login";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              element={<Navigate replace to={"recent-episodes"} />}
            />
            <Route path="recent-episodes" element={<RecentEpisodes />} />
            <Route path="home" element={<Home />} />
            <Route path="favourite" element={<Favourite />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
