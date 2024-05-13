import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieSearchPage from "../components/MovieSearchPage";


const Container = styled.div`
    height: 100%;
`;
const WelcomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    width: 100%;
    background-color: black;
    color: white;
    font-size:30px;
    font-weight:bolder;
`;

const FindContainer = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    text-align: center;
    padding-top:50px;
    flex-direction:column;
    background-color:navy;
    color:white;
    font-size:30px;
    font-weight:bolder;
`;
const SearchBarContainer = styled.div`
    width:40%;
    display:flex;
    align-items:center;
    margin:20px auto;
`;
const SearchInput = styled.input`
    width:90%;
    padding:10px;
    border-radius:10px;
`;
const SearchButton = styled.div`
    display:flex;
    margin-left:15px;
    cursor:pointer;
    font-size:15px;
`;

const MainPage = ()=>{
    const [keyword,setkeyword] = useState("");

    const handleChange = (event)=>{
        setkeyword(event.target.value);
    }

    
    return(
        <Container>
        <WelcomeContainer></WelcomeContainer>
        <FindContainer>
            <p>Find Your movies !</p>
            <SearchBarContainer>
            <SearchInput type = "text"
            placeholder="영화 제목을 입력해주세요"
            onChange={handleChange}
            />
            <SearchButton>검색</SearchButton>
            </SearchBarContainer>
            {keyword.trim()!==""?<MovieSearchPage keyword={keyword}/>:null}
        </FindContainer>
        </Container>
    );
};

export default MainPage;