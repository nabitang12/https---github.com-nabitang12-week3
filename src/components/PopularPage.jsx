import { useEffect, useState } from "react";
import axios from "axios";
import MovieComponent from "./movieComponent";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import Pagination from "./Pagination";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: navy;
`;

const LoadingBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: navy;
`;

const PopularPage = () => {
  const [moviedata, setmoviedata] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const plusPage = () => {
    setcurrentPage(currentPage + 1);
    setLoadingState(true);
  };
  const minusPage = () => {
    setcurrentPage(currentPage - 1);
    setLoadingState(true);
  };
  useEffect(() => {
    const getMovieData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
            },
            params: {
              language: "ko-KR",
              page: currentPage,
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
    <Background>
      {loadingState ? null : <MovieComponent movieData={moviedata} />}
      <Pagination
        minusPage={minusPage}
        plusPage={plusPage}
        currentPage={currentPage}
        loadingState={loadingState}
      />
    </Background>
  );
};

export default PopularPage;
