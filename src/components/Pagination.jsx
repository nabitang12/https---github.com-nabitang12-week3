import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  font-size: 30px;
  background-color: navy;
  display: flex;
  justify-content: center;
  gap: 100px;
  color: white;
  padding-top: 20px;
  flex-direction: row;
`;
const LeftClickButton = styled.div`
  cursor: pointer;
`;
const NumberContainer = styled.div``;
const RightClickButton = styled.div`
  cursor: pointer;
`;
const Pagination = ({ minusPage, plusPage, currentPage }) => {
  const isFirstPage = () => {
    return currentPage === 1;
  };
  return (
    <Background>
      <LeftClickButton onClick={minusPage}>
        {isFirstPage(currentPage) ? null : "<"}
      </LeftClickButton>
      <NumberContainer>{currentPage}</NumberContainer>
      <RightClickButton onClick={plusPage}>{">"}</RightClickButton>
    </Background>
  );
};

export default Pagination;
