import { useState } from "react";
import styled from "styled-components";
const Background = styled.div`
    width:100%;
    height:100%;
    background-color:grey;
    display:flex;
    flex-direction:column;
`;

const InputBackground = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:100px;
`;


const SignUpInput = styled.input`
    width:500px;
    height:45px;
    border:0;
    border-radius:30px;
    padding-left:20px;
    margin:10px;
`;

const SignUpTitle = styled.div`
    font-weight:bolder;
    font-size:20px;
    margin-bottom:40px;
`;

const SignUpButton = styled.button`
    width:525px;
    height:45px;
    border:0;
    border-radius:30px;
    margin-top:40px;
`;
const SignUpPage = ()=>{
    const [text,setText] = useState('');

    const onChange = (e)=>{
        setText(e.target.value);
    }
    return(
        <Background>
            <InputBackground>
            <SignUpTitle>회원가입 페이지</SignUpTitle>
            <SignUpInput onChange={onChange} value={text} placeholder="이름을 입력해주세요"/>
            <SignUpInput onChange={onChange} value={text} placeholder="이메일을 입력해주세요"/>
            <SignUpInput onChange={onChange} value={text} placeholder="나이를 입력해주세요"/>
            <SignUpInput onChange={onChange} value={text} placeholder="비밀번호를 입력해주세요"/>
            <SignUpInput onChange={onChange} value={text} placeholder="비밀번호 확인"/>
            <SignUpButton>제출하기</SignUpButton>
            </InputBackground>
        </Background>
    );
};

export default SignUpPage;