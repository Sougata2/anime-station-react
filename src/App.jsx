import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./ui/AppLayout";
import RecentEpisodes from "./pages/RecentEpisodes";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import About from "./pages/About";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontFamily: '"Poetsen One", sans-serif',
            color: "#1a1a1a82"
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
