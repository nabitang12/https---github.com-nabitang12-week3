import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieSearchComponent from "./MovieSearchComponent";

const MovieSearchPage = ({ keyword }) => {
  const [moviedata, setmoviedata] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${keyword}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
            },
            parmas: {
              include_adult: false,
              language: "ko-KR",
              page: 1,
            },
          }
        );
        console.log(keyword);
        setmoviedata(res.data.results);
        setLoadingState(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieData();
  }, [keyword]);

  return loadingState ? (
    "기달려"
  ) : (
    <MovieSearchComponent movieData={moviedata} />
  );
};

export default MovieSearchPage;
