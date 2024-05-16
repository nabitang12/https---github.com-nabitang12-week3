import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import NowPlayingPage from "./components/NowPlayingPage";
import PopularPage from "./components/PopularPage";
import TopRatedPage from "./components/TopRatedPage";
import UpComingPage from "./components/UpComingPage";
import MovieDetailPage from "./components/MovieDetailPage";
import NotFoundPage from "./components/NotFoundPage";
import SignUpPage from "./components/SignUpPage";
import Layout from "./headers/Layout";
import LoginPage from "./components/LoginPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/nowPlaying" element={<NowPlayingPage />} />
          <Route path="/Popular" element={<PopularPage />} />
          <Route path="/TopRated" element={<TopRatedPage />} />
          <Route path="/Upcoming" element={<UpComingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
