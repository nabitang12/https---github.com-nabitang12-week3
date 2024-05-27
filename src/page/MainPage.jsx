import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieSearchPage from "../components/MovieSearchPage";
import Debounce from "../components/Debounce";

const Container = styled.div`
  height: 100%;
`;
const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 100%;
  background-color: black;
  color: white;
  font-size: 30px;
  font-weight: bolder;
`;

const FindContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  text-align: center;
  padding-top: 50px;
  flex-direction: column;
  background-color: navy;
  color: white;
  font-size: 30px;
  font-weight: bolder;
`;
const SearchBarContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  margin: 20px auto;
`;
const SearchInput = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
`;
const SearchButton = styled.div`
  display: flex;
  margin-left: 15px;
  cursor: pointer;
  font-size: 15px;
`;

const MainPage = () => {
  const [keyword, setkeyword] = useState("");
  const [loginStatus, setloginStatus] = useState(false);
  const debouncedkeyword = Debounce(keyword, 1000);

  const handleChange = (event) => {
    setkeyword(event.target.value);
  };
  useEffect(() => {
    if (localStorage.getItem("value") == 1) {
      setloginStatus(true);
    } else {
      setloginStatus(false);
    }
  }, []);

  return (
    <Container>
      <WelcomeContainer>
        {localStorage.getItem("username")}님 환영합니다!
      </WelcomeContainer>
      <FindContainer>
        <p>Find Your movies !</p>
        <SearchBarContainer>
          <SearchInput
            type="text"
            placeholder="영화 제목을 입력해주세요"
            onChange={handleChange}
            value={keyword}
          />
          <SearchButton>검색</SearchButton>
        </SearchBarContainer>
        {debouncedkeyword !== "" ? (
          <MovieSearchPage keyword={debouncedkeyword} />
        ) : null}
      </FindContainer>
    </Container>
  );
};

export default MainPage;
