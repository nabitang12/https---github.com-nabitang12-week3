import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
    width:100%;
    height:8%;
    background-color:navy;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    position:sticky;
    z-index=1;
`;
const LoginBackground = styled.div`
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  padding: 15px;
  color: ${({ active }) => (active ? "yellow" : "white")};

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
    color: white;
  }
`;
const Header = () => {
  const [isLoggedin, setisLoggedin] = useState(false);
  const location = useLocation();

  return (
    <>
      <Container>
        <LeftContainer>
          <StyleLink to="/">UMC Movie</StyleLink>
        </LeftContainer>
        <RightContainer>
          <LoginBackground>
            <StyleLink to="/signup" active={location.pathname == "/signup"}>
              회원가입
            </StyleLink>
          </LoginBackground>
          <StyleLink to="/login">로그인</StyleLink>
          <StyleLink to="/Popular">Popular</StyleLink>
          <StyleLink to="/nowPlaying">Now Playing</StyleLink>
          <StyleLink to="/TopRated">Top Rated</StyleLink>
          <StyleLink to="/Upcoming">Upcoming</StyleLink>
        </RightContainer>
      </Container>
    </>
  );
};

export default Header;
