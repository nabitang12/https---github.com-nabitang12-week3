import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainPage from './page/MainPage'
import NowPlayingPage from './components/NowPlayingPage'
import PopularPage from './components/PopularPage'
import TopRatedPage from './components/TopRatedPage'
import UpComingPage from './components/UpComingPage'
import Layout from './headers/Layout'
import MovieComponent from './components/movieComponent'
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
                
              </Route>
            </Routes>
      </BrowserRouter>
    );
}

export default App;
