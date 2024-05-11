import { useEffect, useState } from "react";
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
    
    const [form,setForm] = useState({
        name:'',
        validname:false,
        age:'',
        validage:false,
        email:'',
        validemail:false,
        password:'',
        validpassword:false,
        passwordConfirm:'',
        validpasswordConfirm:false,
    });
    const CanSubmit =
    form.validname&&
    form.validage&&
    form.validemail&&
    form.validpasswordConfirm&&
    form.validpassword;

    const [errorMessage,setErrorMessage] = useState({
        Ename:'',
        Eage:'',
        Eemail:'',
        Epassword:'',
    });
    const nameChecker = /^[ㄱ-ㅎ가-힣a-zA-Z]+$/
    const emailChecker = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/
    const ageChecker = /^[0-9]+$/ 
    const passwordChecker = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
    
        useEffect(()=>{
            const nameresult = nameChecker.test(form.name);
            if(nameresult === false&&form.name.trim()!=""){
                setErrorMessage({...errorMessage,Ename: "이름을 입력해주세요"});
            }
            else{
                setForm({...form,validname:true});
                setErrorMessage({...errorMessage,Ename:""});
            }
                
        },[form.name]);

        useEffect(()=>{
            const emailresult = emailChecker.test(form.email);
            if(emailresult === false&&form.email.trim()!=""){
                setErrorMessage({...errorMessage,Eemail:"이메일을 입력해주세요"});
            }
            else{
                setForm({...form,validemail:true});
                setErrorMessage({...errorMessage,Eemail:""});
            }
        },[form.email]);

        useEffect(()=>{
            const ageresult = ageChecker.test(form.age);
            if(ageresult === false&&form.age.trim()!=""){
                setErrorMessage({...errorMessage,Eage:"나이를 입력해주세요"});
            }
            else if(parseInt(form.age) <19){
                setErrorMessage({...errorMessage,Eage:"19세 미만은 안돼"});
            }
            else{
                setForm({...form,validage:true});
                setErrorMessage({...errorMessage,Eage:""});
            }
        },[form.age]);

        useEffect(()=>{
            const passwordresult = passwordChecker.test(form.password);
            const passwordlength = form.password.length;
            if(passwordresult===false&&form.password.trim()!=""){
                setErrorMessage({...errorMessage,Epassword:"비밀번호를 입력해주세요"});
            }
            else{
                setForm({...form,validpassword:true});
                setErrorMessage({...errorMessage,Epassword:""});
            }
        },[form.password]);
    return(
        <Background>
            <InputBackground>
            <SignUpTitle>회원가입 페이지</SignUpTitle>
            <SignUpInput 
            onChange={e=>setForm({...form,name:e.target.value})} 
            value={form.name} 
            placeholder="이름을 입력해주세요"/>
            <h1>{errorMessage.Ename}</h1>
            <SignUpInput 
            onChange={e=>setForm({...form,email:e.target.value})} 
            value={form.email} 
            placeholder="이메일을 입력해주세요"/>
            <h1>{errorMessage.Eemail}</h1>
            <SignUpInput 
            onChange={e=>setForm({...form,age:e.target.value})} 
            value={form.age} 
            placeholder="나이를 입력해주세요"/>
            <h1>{errorMessage.Eage}</h1>
            <SignUpInput 
            onChange={e=>setForm({...form,password:e.target.value})} 
            value={form.password} 
            placeholder="비밀번호를 입력해주세요"/>
            <h1>{errorMessage.Epassword}</h1>
            <SignUpInput 
            onChange={e=>setForm({...form,passwordConfirm:e.target.value})} 
            value={form.passwordConfirm} 
            placeholder="비밀번호 확인"/>
            <SignUpButton>제출하기</SignUpButton>
            </InputBackground>
        </Background>
    );
};

export default SignUpPage;