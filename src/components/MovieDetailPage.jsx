import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ background }) => `url(${background})`};
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(26, 15, 114, 0.8);
`;
const PersonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(26, 15, 114, 0.8);
`;
const PosterImage = styled.img`
  padding-left: 200px;
  width: 400px;
  height: 600px;
`;

const Information = styled.div`
  line-height: 50px;
  display: flex;
  flex-direction: column;
  padding-right: 200px;
  padding-left: 100px;
  margin-left: 50px;
`;

const MovieDescription = styled.div`
  line-height: 30px;
`;
const MovieOverview = styled.div`
  font-size: 20px;
  font-weight: bolder;
`;

const MovieDetailPage = () => {
  const [moviedata, setmoviedata] = useState({});
  const [persondata, setpersondata] = useState([]);

  const { id } = useParams();
  const calScore = (vote_average) => {
    const stars = "⭐️".repeat(Math.floor(vote_average));
    return stars;
  };

  useEffect(() => {
    const getMovieDetailData = async (id) => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
            },
            params: {
              language: "ko-KR",
            },
          }
        );
        setmoviedata(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetailData(parseInt(id));
  }, [id]);

  useEffect(() => {
    const getPersonData = async (id) => {
      try {
        const personres = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
            },
            params: {
              language: "ko-KR",
            },
          }
        );
        setpersondata(personres.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getPersonData(parseInt(id));
  }, [id]);

  return (
    <Background
      background={`https://image.tmdb.org/t/p/w1280/${moviedata.backdrop_path}`}
    >
      <Container>
        <PosterImage
          src={`https://image.tmdb.org/t/p/w500/${moviedata.poster_path}`}
        />
        <Information>
          <MovieOverview>{moviedata.title}</MovieOverview>
          <MovieOverview>평점 {calScore(moviedata.vote_average)}</MovieOverview>
          <MovieOverview>개봉일 {moviedata.release_date}</MovieOverview>
          <MovieOverview>줄거리</MovieOverview>
          <MovieDescription>{moviedata.overview}</MovieDescription>
        </Information>
      </Container>
      <PersonContainer>안녕</PersonContainer>
    </Background>
  );
};

export default MovieDetailPage;
