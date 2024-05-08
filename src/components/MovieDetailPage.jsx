import { useLocation } from "react-router-dom"
import styled from "styled-components";
const Background = styled.div`
    width:100%;
    height:100vh;
    background: ${({background}) => `url(${background})`};
    background-size:cover;
    background-position : center;
`;

const Container = styled.div`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    background-color: rgba(26,15,114,0.8);
`;
const PosterImage = styled.img`
    width:400px;
    height:600px;
`;
const Information = styled.div`
    line-height:50px;
    display:flex;
    flex-direction:column;
    padding:10px;
    margin-left:50px;
`;
const MovieContent = styled.div`
    line-height:30px;
`;
const MovieDetailPage = ()=>{

    const location = useLocation();
    const data = location.state;

    const calScore = (vote_average)=>{
        const stars = "⭐️".repeat(Math.floor(vote_average));
        return stars;
    };

    return(
    <Background background={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}>
        <Container>
            <PosterImage
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                alt={data.title}
            />
            <Information>
                <h1>| {data.title}</h1>
                <h3>평점 {calScore(data.vote_average)}</h3>
                <h3>개봉일 {data.release_date}</h3>
                <h3>줄거리</h3>
                <MovieContent>
                    {data.overview
                        ?data.overview
                        :"TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}
                </MovieContent>
            </Information>
        </Container>
    </Background>
    );
};

export default MovieDetailPage