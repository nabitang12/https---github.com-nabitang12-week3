import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import MovieComponent from "./movieComponent";

const NowPlayingPage = ()=>{
    const [moviedata,setmoviedata] = useState([]);

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
            }
            catch(error){
                console.log(error);
            }
        };
        getMovieData();
    });

    return <MovieComponent movieData={moviedata}/>;

};

export default NowPlayingPage;