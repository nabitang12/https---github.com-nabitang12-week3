import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SearchBackground = styled.div`
  background-color: black;
  width: 70%;
  height: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0px;
  border-radius: 15px;
  overflow-y: scroll;
  margin: 0 auto;
`;

const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`;

const PosterImage = styled.img`
  width: 300px;
  height: 400px;
`;

const MovieTitle = styled.div`
  font-size: 16px;
  color: white;
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
        <SearchResult key={movie.id} onClick={() => handleClick(movie)}>
          <PosterImage
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <MovieTitle>{movie.title}</MovieTitle>
        </SearchResult>
      ))}
    </SearchBackground>
  );
};

export default MovieSearchComponent;
