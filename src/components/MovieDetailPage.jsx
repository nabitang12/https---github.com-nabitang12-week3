import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ background }) => `url(${background})`};
  background-color: rgba(26, 15, 114, 0.8);
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 763px) {
    background: rgba(26, 15, 114, 0.8);
  }
`;
const LoadingBackground = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: navy;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(26, 15, 114, 0.8);
  @media screen and (max-width: 763px) {
    padding-top: 10%;
    justify-content: start;
    flex-direction: column;
    align-items: left;
  }
`;
const PersonBackground = styled.div`
  display: flex;
  width: 100%;
  color: white;
  background-color: rgba(26, 15, 114, 0.8);
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PersonContainer = styled.div`
  width: 90%;
  height: 80%;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
`;
const PersonTitle = styled.div`
  font-size: 30px;
  font-weight: bolder;
  margin: 30px;
`;
const PosterContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 763px) {
    align-items: start;
    margin-left: 5%;
    margin-top: 5%;
    margin-bottom: 10%;
    height: 25%;
  }
`;
const PosterImage = styled.img`
  margin-left: 30%;
  width: 80%;
  height: 80%;
  @media screen and (max-width: 763px) {
    margin-left: 0;

    width: 35%;
    height: 100%;
  }
`;
const ActorContainer = styled.div``;
const ActorImage = styled.img`
  width: 60%;
  height: 60%;
  border-radius: 70%;
  object-fit: cover;
`;
const ActorName = styled.div`
  font-weight: bold;
`;
const Information = styled.div`
  width: 100%;
  line-height: 50px;
  display: flex;
  align-items: left;
  flex-direction: column;
  padding-left: 5%;
  @media screen and (max-width: 763px) {
    padding-left: 5%;
    justify-content: start;
    align-items: left;
  }
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
  const [loadingState, setLoadingState] = useState(true);
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
        setpersondata(personres.data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    setLoadingState(false);
    getPersonData(parseInt(id));
    getMovieDetailData(parseInt(id));
  }, [id]);

  const handleOverview = () => {
    if (moviedata.overview === "") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {loadingState ? (
        <LoadingBackground>
          <ClipLoader color="#E50915" loading={loadingState} size={150} />
        </LoadingBackground>
      ) : (
        <Background
          background={`https://image.tmdb.org/t/p/w1280/${moviedata.backdrop_path}`}
        >
          <Container>
            <PosterContainer>
              <PosterImage
                src={`https://image.tmdb.org/t/p/w500/${moviedata.poster_path}`}
              />
            </PosterContainer>
            <Information>
              <MovieOverview>{moviedata.title}</MovieOverview>
              <MovieOverview>
                평점 {calScore(moviedata.vote_average)}
              </MovieOverview>
              <MovieOverview>개봉일 {moviedata.release_date}</MovieOverview>
              <MovieOverview>줄거리</MovieOverview>
              <MovieDescription>
                {handleOverview
                  ? "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."
                  : moviedata.overview}
              </MovieDescription>
            </Information>
          </Container>
          <PersonBackground>
            <PersonTitle>출연진 및 제작진</PersonTitle>
            <PersonContainer>
              {persondata.map((person, index) => (
                <ActorContainer key={index}>
                  <ActorImage
                    src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`}
                  />
                  <ActorName>{person.name}</ActorName>
                </ActorContainer>
              ))}
            </PersonContainer>
          </PersonBackground>
        </Background>
      )}
    </>
  );
};

export default MovieDetailPage;
