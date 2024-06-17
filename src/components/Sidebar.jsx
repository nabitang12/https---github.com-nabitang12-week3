import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: purple;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 5%;
  gap: 5px;
  opacity: 0.9;
  z-index: 1;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  padding: 15px;
  color: ${({ active }) => (active ? "yellow" : "white")};

  &:hover {
    font-weight: bolder;
    color: white;
  }
`;

const Sidebar = () => {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);

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
    <Container>
      {isLoggedin ? null : (
        <StyleLink to="/signup" active={location.pathname == "/signup"}>
          회원가입
        </StyleLink>
      )}
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
      <StyleLink to="/Popular" active={location.pathname == "/Popular"}>
        Popular
      </StyleLink>
      <StyleLink to="/nowPlaying" active={location.pathname == "/nowPlaying"}>
        Now Playing
      </StyleLink>
      <StyleLink to="/TopRated" active={location.pathname == "/TopRated"}>
        Top Rated
      </StyleLink>
      <StyleLink to="/Upcoming" active={location.pathname == "/Upcoming"}>
        Upcoming
      </StyleLink>
    </Container>
  );
};

export default Sidebar;
