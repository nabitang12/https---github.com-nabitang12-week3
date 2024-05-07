import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
    width:100%;
    height:8%;
    background-color:navy;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    position:fixed;
    z-index=1;
    
`;
const LoginBackground = styled.div`
    color:yellow;
    cursor:pointer;
    padding:15px;
    &:hover{
        transform:scale(1.1);
        transition-duration:0.5s;
    }
`;
const LeftContainer = styled.div`
    display:flex;
    align-items:center;
`;

const RightContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`;

const StyleLink = styled(Link)`
    text-decoration:none;
    padding:15px;
    color:white;

    &:hover{
        transform :scale(1.1);
        transition-duration: 0.5s;
        color:white;
    }
`;
const Header = ()=>{
    const [isLoggedin,setisLoggedin] = useState(false);

    const handlelogin = ()=>{
        setisLoggedin(!isLoggedin);
    };
    
    return(
        <>
        <Container>
            <LeftContainer>
                <StyleLink to="/">UMC Movie</StyleLink>
            </LeftContainer>
            <RightContainer>
                <LoginBackground onClick={handlelogin}>
                    {isLoggedin?"로그아웃":"로그인"}
                </LoginBackground>
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