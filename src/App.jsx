import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainPage from './page/MainPage'
import NowPlayingPage from './components/NowPlayingPage'
import PopularPage from './components/PopularPage'
import TopRatedPage from './components/TopRatedPage'
import UpComingPage from './components/UpComingPage'
import MovieDetailPage from './components/MovieDetailPage'
import NotFoundPage from './components/NotFoundPage'
import Layout from './headers/Layout'
import './App.css'

function App() {
    return(
      <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/nowPlaying" element={<NowPlayingPage/>}/>
                <Route path="/Popular" element={<PopularPage />} />
                <Route path="/TopRated" element={<TopRatedPage />} />
                <Route path="/Upcoming" element={<UpComingPage />} />
                
                <Route path="/movie/:title" element={<MovieDetailPage/>} />
              </Route>
              <Route path="*" element={<NotFoundPage/>} />
            </Routes>
      </BrowserRouter>
    );
}

export default App;
