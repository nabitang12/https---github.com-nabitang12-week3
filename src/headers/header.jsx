import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Component, useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  height: 5%;
  background-color: navy;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const Box = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: purple;
  display: flex;
  flex-direction: column;
  position: fixed;
  gap: 5px;
  opacity: 0.9;
  z-index: 1;
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
  @media screen and (max-width: 763px) {
    background-color: green;
    display: none;
  }
`;
const MenuContainer = styled.div`
  display: none;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  @media screen and (max-width: 763px) {
    display: flex;
  }
`;
const Icon = styled(FiAlignJustify)`
  size: 40px;
  color: white;
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
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isLoggedin) {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      setIsLoggedin(false);
      navigate("/");
    } else {
      setIsLoggedin(true);
      navigate("/");
    }
  };
  return (
    <>
      <Container>
        <LeftContainer>
          <StyleLink to="/">UMC Movie</StyleLink>
        </LeftContainer>
        <RightContainer>
          <LoginBackground>
            {isLoggedin ? null : (
              <StyleLink to="/signup" active={location.pathname == "/signup"}>
                회원가입
              </StyleLink>
            )}
          </LoginBackground>

          <LoginBackground>
            {isLoggedin ? (
              <div onClick={handleLogin}>로그아웃</div>
            ) : (
              <StyleLink
                to="/login"
                onClick={handleLogin}
                active={location.pathname == "/login"}
              >
                로그인
              </StyleLink>
            )}
          </LoginBackground>
          <StyleLink to="/Popular" active={location.pathname == "/Popular"}>
            Popular
          </StyleLink>
          <StyleLink
            to="/nowPlaying"
            active={location.pathname == "/nowPlaying"}
          >
            Now Playing
          </StyleLink>
          <StyleLink to="/TopRated" active={location.pathname == "/TopRated"}>
            Top Rated
          </StyleLink>
          <StyleLink to="/Upcoming" active={location.pathname == "/Upcoming"}>
            Upcoming
          </StyleLink>
        </RightContainer>
        <MenuContainer
          onClick={() => {
            setOpen(!isOpen);
            console.log(isOpen);
          }}
        >
          <Icon size={30} />
        </MenuContainer>
      </Container>

      {isOpen ? null : (
        <Box
          initial="hidden"
          animate={{ x: "-70%" }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Sidebar isOpen={isOpen} />
        </Box>
      )}
    </>
  );
};

export default Header;
