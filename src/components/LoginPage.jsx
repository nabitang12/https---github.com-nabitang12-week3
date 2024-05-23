import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";

const LoginContainer = styled.div`
  height: 100%;
  background-color: purple;
  padding-top: 150px;
`;
const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
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
  margin: 5px;
`;
const LoginError = styled.div`
  width: 90%;
  font-size: 15px;
  color: red;
  padding: 5px;
`;
const LoginButton = styled.div`
  cursor: pointer;
  background-color: white;
  width: 90%;
  padding: 10px;
  border-radius: 15px;
  margin-top: 30px;
  text-align: center;
`;
const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: "",
    validid: false,
    password: "",
    validpassword: false,
  });

  const [errorMessage, setErrorMessage] = useState({
    Eid: "",
    Epassword: "",
  });

  const passwordChecker =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
  const idChecker = /[a-zA-Z0-9]/;

  useEffect(() => {
    const idresult = idChecker.test(form.id);
    if (idresult === false || form.id.trim() == "") {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        Eid: "아이디를 입력해주세요",
      }));
    } else {
      setForm((form) => ({ ...form, validid: true }));
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        Eid: "",
      }));
    }
  }, [form.id]);

  useEffect(() => {
    const passwordresult = passwordChecker.test(form.password);
    if (passwordresult === false && form.password.trim() != "") {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        Epassword: "영어,숫자,특수문자 포함해",
      }));
      setForm((form) => ({ ...form, validpassword: false }));
    } else if (form.password.trim() === "") {
      setForm((form) => ({ ...form, validpassword: false }));
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        Epassword: "비밀번호 입력해",
      }));
    } else {
      setForm((form) => ({ ...form, validpassword: true }));
      setErrorMessage((errorMessage) => ({ ...errorMessage, Epassword: "" }));
    }
  }, [form.password]);

  const handleLogin = () => {
    if (form.validid && form.validpassword) {
      const user = {
        username: form.id,
        password: form.password,
      };
      const request = async () => {
        try {
          const res = await axios.post(
            "http://localhost:8080/auth/login",
            user
          );
          const token = res.data.token;
          localStorage.setItem("token", token);
          console.log(localStorage.getItem("token"));
          alert("로그인 성공했어!");
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      };
      request();
    } else {
      alert("로그인 안돼 ㅋㅋ");
    }
  };

  return (
    <LoginContainer>
      <LoginTitle>로그인 페이지</LoginTitle>
      <InputContainer>
        <LoginInputBarContainer>
          <LoginInput
            type="text"
            onChange={(e) => setForm({ ...form, id: e.target.value })}
            value={form.id}
            placeholder="아이디"
          />
          <LoginError>{errorMessage.Eid}</LoginError>
          <LoginInput
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            value={form.password}
            placeholder="비밀번호"
          />
          <LoginError>{errorMessage.Epassword}</LoginError>
          <LoginButton onClick={handleLogin}>로그인</LoginButton>
        </LoginInputBarContainer>
      </InputContainer>
    </LoginContainer>
  );
};

export default LoginPage;
