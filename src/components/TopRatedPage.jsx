import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieComponent from "./movieComponent";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
const LoadingBody = styled.div`
  background-color: navy;
`;

const LoadingBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: navy;
`;

const TopRatedPage = () => {
  const [moviedata, setmoviedata] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
            },
            params: {
              language: "ko-KR",
              page: 1,
            },
          }
        );
        setmoviedata(res.data.results);
        setLoadingState(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieData();
  });

  if (loadingState) {
    return (
      <LoadingBackground>
        <ClipLoader color="#E50915" loading={loadingState} size={150} />
      </LoadingBackground>
    );
  }
  return (
    <LoadingBody>
      {loadingState ? null : <MovieComponent movieData={moviedata} />};
    </LoadingBody>
  );
};

export default TopRatedPage;
