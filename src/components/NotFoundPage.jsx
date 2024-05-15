import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  line-height: 50px;
  align-items: center;
  justify-content: center;
  background-color: navy;
  color: white;
`;

const StyleLink = styled(Link)`
  font-size: 30px;
  color: white;
`;
const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <h1>Oops!</h1>
      <p>예상치 못한 에러가 발생했습니다 ; xd</p>
      <p>Not Found</p>
      <StyleLink to="/">메인으로 이동하기</StyleLink>
    </Background>
  );
};

export default NotFoundPage;
