import styled from "styled-components";

const LoginContainer = styled.div`
  height: 100%;
  background-color: purple;
  padding-top: 150px;
`;
const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 30px;
`;
const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const LoginInputBarContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
`;
const LoginInput = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 15px;
  margin: 10px;
`;

const LoginButton = styled.div`
  cursor: pointer;
  background-color: white;
  width: 90%;
  padding: 10px;
  border-radius: 15px;
  margin-top: 30px;
`;
const LoginPage = () => {
  return (
    <LoginContainer>
      <LoginTitle>로그인 페이지</LoginTitle>
      <InputContainer>
        <LoginInputBarContainer>
          <LoginInput type="text" placeholder="아이디" />
          <LoginInput type="text" placeholder="비밀번호" />
          <LoginButton>로그인</LoginButton>
        </LoginInputBarContainer>
      </InputContainer>
    </LoginContainer>
  );
};

export default LoginPage;
