import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    return(
        <>
        <Container>
            <LeftContainer>
                <StyleLink to="/r">UMC Movie</StyleLink>
            </LeftContainer>
            <RightContainer>
                <StyleLink to="/">회원가입</StyleLink>
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