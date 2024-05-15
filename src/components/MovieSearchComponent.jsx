import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SearchBackground = styled.div`
  background-color: black;
  width: 70%;
  height: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  overflow-y: scroll;
  margin: 0 auto;
  padding: 100px 40px;
`;

const ContentContainer = styled.div`
  background-color: mediumpurple;
  position: relative;

  &:hover .movie-poster-container {
    opacity: 0.3;
  }
`;

const MovieOverview = styled.div`
  position: absolute;
  color: white;
  display: none;
  padding: 20px;
  z-index: 999;

  word-wrap: break-word;

  ${ContentContainer}:hover & {
    display: block;
  }
`;

const PosterImage = styled.img`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  z-index: 1;
`;

const MovieTitle = styled.div`
  font-size: 16px;
  color: white;
`;
const MovieDescription = styled.div`
  color: white;
`;
const MovieData = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 50px;
`;

const MovieSearchComponent = ({ movieData }) => {
  const navigate = useNavigate();

  const handleClick = (movie) => {
    navigate(`/movie/${movie.title}`, {
      state: {
        poster_path: movie.poster_path,
        title: movie.title,
        overview: movie.overview,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
        backdrop_path: movie.backdrop_path,
      },
    });
  };

  return (
    <SearchBackground>
      {movieData.map((movie) => (
        <ContentContainer key={movie.id} onClick={() => handleClick(movie)}>
          <div>
            <MovieOverview className="movie-overview">
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieDescription>{movie.overview}</MovieDescription>
            </MovieOverview>
          </div>

          <div className="movie-poster-container">
            <PosterImage
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="movie-poster"
            />
            <MovieData>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieDescription>{movie.vote_average}</MovieDescription>
            </MovieData>
          </div>
        </ContentContainer>
      ))}
    </SearchBackground>
  );
};

export default MovieSearchComponent;
