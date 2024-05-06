import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import MovieComponent from "./movieComponent";
import LoadingSpinner from "../page/LoadingSpinner";
const NowPlayingPage = ()=>{
    const [moviedata,setmoviedata] = useState([]);
    const [loadingState , setLoadingState] = useState(true);
    useEffect(()=>{
        const getMovieData = async ()=>{
            try{
                const res = await axios.get(
                    `https://api.themoviedb.org/3/movie/now_playing`,
                    {
                        headers:{
                            accept:"application/json",
                            Authorization: `Bearer ${import.meta.env
                            .VITE_ACCESS_TOKEN}`,
                        },
                        params: {
                            language: "en-US",
                            page: 1,
                        },
                    }
                );
                setmoviedata(res.data.results);
                setLoadingState(false);
            }
            catch(error){
                console.log(error);
            }
        };
        getMovieData();
    });

    return loadingState?<LoadingSpinner/>:<MovieComponent movieData={moviedata}/>;

};

export default NowPlayingPage;