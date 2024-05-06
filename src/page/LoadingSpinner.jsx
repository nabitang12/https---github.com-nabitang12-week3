import React from "react";
import Spinner from '../assets/Spinner.gif'
import styled from "styled-components";
const LoadingBackground = styled.div`
    background-color:navy;
`;
const LoadingTitle = styled.div`

`;
const LoadingImage = styled.img`
    background-image:url(${Spinner})
`;
const LoadingSpinner = ()=>{
    return(
        <>
        <LoadingTitle>Loading..</LoadingTitle>
        <LoadingImage/>
        </>
    )
}

export default LoadingSpinner;