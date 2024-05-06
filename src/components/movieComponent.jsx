import React from "react";
import styled from "styled-components";

const Background = styled.div`
    width:100%;
    background-color:navy;
    padding-top:70px;
    padding-left:50px;
    padding-right:50px;
`;

const MovieContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap:20px;
`;

const ContentContainer = styled.div`
    background-color:mediumpurple;
    padding:10px;
    position:relative;
    
    &:hover .movie-poster-container{
        opacity:0.3;
    }
`;

const MovieOverview = styled.div`
    position:absolute;
    color:white;
    display:none;
    padding:20px;
    z-index:999;

    word-wrap:break-word;

    ${ContentContainer}:hover &{
        display:block;
    }
`;

const MoviePoster = styled.img`
    width:100%;
    padding:5px;
    box-sizing:border-box;
    z-index:1;
`;

const MovieData = styled.div`
    color:white;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    padding-bottom:50px;
`;

const MovieComponent =({movieData})=>{
    return(
        <Background>
            <MovieContainer>
                {movieData.map((Movie,index)=>(
                    <ContentContainer key={index}>
                        <div>
                            <MovieOverview className="movie-overview">
                                <h2>{Movie.title}</h2>
                                <p>{Movie.overview}</p>
                            </MovieOverview>

                            <div className="movie-poster-container">
                                <MoviePoster
                                    src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
                                    alt={Movie.title}
                                    className="movie-poster"
                                />
                            </div>

                            <MovieData>
                                <div>{Movie.title}</div>
                                <div>{Movie.vote_average}</div>
                            </MovieData>
                        </div>
                    </ContentContainer>
                )
            )}
            </MovieContainer>
        </Background>
    );
};

export default MovieComponent;