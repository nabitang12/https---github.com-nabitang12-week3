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
    background-color: ${(props) => (props.$allValid?"0074ff":"gray")};
    border-radius:30px;
    margin-top:40px;
    cursor:pointer;
`;

const SignUpError = styled.div`
    display:flex;
    color:red;
    text-align:left;
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
        Epassconfirm:'',
    });
    const nameChecker = /^[ㄱ-ㅎ가-힣a-zA-Z]+$/
    const emailChecker = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/
    const ageChecker = /^[0-9]+$/ 
    const passwordChecker = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
    
        useEffect(()=>{
            const nameresult = nameChecker.test(form.name);
            if(nameresult === false&&form.name.trim()!=""){
                setErrorMessage((errorMessage)=>({...errorMessage,Ename: "이름을 입력해주세요"}));
            }
            else{
                setForm((form)=>({...form,validname:true}));
                setErrorMessage((errorMessage)=>({...errorMessage,Ename:""}));
            }
                
        },[form.name]);

        useEffect(()=>{
            const emailresult = emailChecker.test(form.email);
            if(emailresult === false&&form.email.trim()!=""){
                setErrorMessage((errorMessage)=>({...errorMessage,Eemail:"이메일을 입력해주세요"}));
            }
            else{
                setForm((form)=>({...form,validemail:true}));
                setErrorMessage((errorMessage)=>({...errorMessage,Eemail:""}));
            }
        },[form.email]);

        useEffect(()=>{
            const ageresult = ageChecker.test(form.age);
            if(ageresult === false&&form.age.trim()!=""){
                setErrorMessage((errorMessage)=>({...errorMessage,Eage:"나이를 입력해주세요"}));
            }
            else if(parseInt(form.age) <19){
                setErrorMessage((errorMessage)=>({...errorMessage,Eage:"19세 미만은 안돼"}));
            }
            else{
                setForm((form)=>({...form,validage:true}));
                setErrorMessage((errorMessage)=>({...errorMessage,Eage:""}));
            }
        },[form.age]);

        useEffect(()=>{
            const passwordresult = passwordChecker.test(form.password);
            if(passwordresult===false&&form.password.trim()!=""){
                setErrorMessage((errorMessage)=>({...errorMessage,Epassword:"비밀번호를 입력해주세요"}));
            }
            else{
                setForm((form)=>({...form,validpassword:true}));
                setErrorMessage((errorMessage)=>({...errorMessage,Epassword:""}));
            }
        },[form.password]);

        useEffect(()=>{
            if(form.password!==form.passwordConfirm){
                setErrorMessage((errorMessage)=>
                    ({...errorMessage,Epassconfirm:"비밀번호가 일치하지 않아"}));
            }
            else{
                setForm((form)=>({...form,validpasswordConfirm:true}));
                setErrorMessage((errorMessage)=>({...errorMessage,Epassconfirm:""}));
            }
        },[form.passwordConfirm]);

        const SignUpClick = ()=>{
            if(
                form.validage&&
                form.validemail&&
                form.validname&&
                form.validpassword&&
                form.validpasswordConfirm
            )
            {
                alert("회원가입에 성공했어!");
                const user = {
                    submitname : form.name,
                    submitage : form.age,
                    submitemail:form.email,
                    submitpassword:form.password,
                };
    
                console.log("유저정보",user);
            }
            else{
                console.log("회원가입 안돼 ㅋㅋ");
            }
        };

    return(
        <Background>
            <InputBackground>
            <SignUpTitle>회원가입 페이지</SignUpTitle>
            <SignUpInput 
            onChange={e=>setForm({...form,name:e.target.value})} 
            value={form.name} 
            placeholder="이름을 입력해주세요"/>
            <SignUpError>{errorMessage.Ename}</SignUpError>
            <SignUpInput 
            onChange={e=>setForm({...form,email:e.target.value})} 
            value={form.email} 
            placeholder="이메일을 입력해주세요"/>
            <SignUpError>{errorMessage.Eemail}</SignUpError>
            <SignUpInput 
            onChange={e=>setForm({...form,age:e.target.value})} 
            value={form.age} 
            placeholder="나이를 입력해주세요"/>
            <SignUpError>{errorMessage.Eage}</SignUpError>
            <SignUpInput 
            onChange={e=>setForm({...form,password:e.target.value})} 
            value={form.password} 
            placeholder="비밀번호를 입력해주세요"/>
            <SignUpError>{errorMessage.Epassword}</SignUpError>
            <SignUpInput 
            onChange={e=>setForm({...form,passwordConfirm:e.target.value})} 
            value={form.passwordConfirm} 
            placeholder="비밀번호 확인"/>
            <SignUpError>{errorMessage.Epassconfirm}</SignUpError>
            <SignUpButton
                onClick={SignUpClick}
                $allValid={
                    form.validage&&
                    form.validemail&&
                    form.validname&&
                    form.validpassword&&
                    form.validpasswordConfirm
                }
                >
                제출하기</SignUpButton>
            </InputBackground>
        </Background>
    );
};

export default SignUpPage;