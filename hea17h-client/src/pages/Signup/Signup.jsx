import React from 'react';
import styled from 'styled-components';

function Signup() {
    return (
        <Container>
            <SignupContainer>
                <h1 style={{ marginTop: '20px' }}>회원가입</h1>
                <InputForm>
                    <InputText>아이디</InputText>
                    <InputItem placeholder='아이디' />
                </InputForm>
                <InputForm>
                    <InputText>비밀번호</InputText>
                    <InputItem placeholder='비밀번호' />
                </InputForm>
                <InputForm>
                    <InputText>비밀번호 확인</InputText>
                    <InputItem placeholder='비밀번호 확인' />
                </InputForm>
                <InputForm>
                    <InputText>이름</InputText>
                    <InputItem placeholder='이름' />
                </InputForm>
                <SignupButton>가입하기</SignupButton>
            </SignupContainer>
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    display: flex;
    margin: 0 auto;
    padding: 0;
    background-color: #faf3e3;
    
    width: 100%;
    height: 100%;
`;

const SignupContainer = styled.div`
    margin: auto;
    background-color: white;
    width: 500px;
    height: 600px;

    justify-content: center;
    align-items: center;
    text-align: center;

    box-shadow: 10px 5px 5px lightgray;
`;

const InputForm = styled.form`
    margin: 0 auto;
    margin-top: 40px;
    width: 400px;
    height: 50px;

    font-size: medium;
    display: block;
`; 

const InputText = styled.h4`
    margin-left: 45px;
    text-align: left;

    margin-bottom: 7px;
`;

const InputItem = styled.input`
    width: 300px;
    height: 35px;

    border: 1px solid #dbdbdb;

    padding-left: 10px;
`;

const SignupButton = styled.button`
    width: 130px;
    height: 50px;
    margin: 50px 180px;

    color: white;
    background-color: #FD7E14;
    border: 1px solid transparent;
    font-size: medium;

    border-radius: 5px;
`;

export default Signup;