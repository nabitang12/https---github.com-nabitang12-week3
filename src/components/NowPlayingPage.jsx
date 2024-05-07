import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import MovieComponent from "./movieComponent";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";

const LoadingBody = styled.div`
    background-color:navy;
    height:100%;
    width:100%;
`;

const LoadingBackground = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

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

    return (
        <LoadingBody>
            
          {loadingState ? (
            <LoadingBackground>
            <ClipLoader color="#E50915"
            loading={loadingState}
            size = {150}/>
            </LoadingBackground>
          ) : (
            <MovieComponent movieData={moviedata} />
          )}
          ;
        </LoadingBody>
      );
};

export default NowPlayingPage;