import { useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import MovieComponent from "./movieComponent";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";
import Pagination from "./Pagination";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
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

const NowPlayingPage = () => {
  const [moviedata, setmoviedata] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();

  const getMovieData = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
          },
          params: {
            language: "ko-KR",
            page: page,
          },
        }
      );
      setmoviedata([...moviedata, ...res.data.results]);
      setPage((page) => page + 1);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (inView) {
      console.log(inView, "무한 스크롤 요청");
      getMovieData();
      setLoadingState(false);
    }
  }, [inView]);

  if (loadingState) {
    return (
      <LoadingBackground>
        <ClipLoader color="#E50915" loading={loadingState} size={150} />
        <div ref={ref}></div>
      </LoadingBackground>
    );
  }

  return (
    <Background>
      <LoadingBody>
        {loadingState ? null : <MovieComponent movieData={moviedata} />};
      </LoadingBody>
      <div ref={ref}>안녕</div>
    </Background>
  );
};

export default NowPlayingPage;
