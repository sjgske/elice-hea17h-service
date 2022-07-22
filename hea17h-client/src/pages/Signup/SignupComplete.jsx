import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SignupComplete() {
    const navigate = useNavigate();
    const id = useLocation().state;

    const handleLaterButton = (e) => {
        e.preventDefault();
        navigate('/login', { replace: true });
    };

    const handleGoButton = async (e) => {
        e.preventDefault();
        navigate(`/signup/detail`, { state: id }, { replace: true });
    };

    return (
        <Container>
            <SignupCompleteContainer>
                <h2 style={{ marginTop: '20px' }}>🎉회원가입이 완료되었습니다🎉</h2>
                <InputForm>
                    <InputText>아이디</InputText>
                    <InputItem
                        placeholder={id}
                        disabled
                    />
                </InputForm>
                <Info>
                    상세 정보를 입력하고
                    <br />
                    전문가의 솔루션을 받아보세요.
                </Info>
                <LaterButton onClick={handleLaterButton}>나중에 입력하기</LaterButton>
                <GoToDetailButton onClick={handleGoButton}>상세 정보 입력하기</GoToDetailButton>
            </SignupCompleteContainer>
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

const SignupCompleteContainer = styled.div`
    margin: auto;
    background-color: white;
    width: 500px;
    height: 400px;

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
    height: 40px;

    border: 1px solid #dbdbdb;

    padding-left: 10px;
`;

const Info = styled.h3`
    margin: 50px 100px;

    text-align: left;
    align-items: center;
    justify-content: center;

    font-size: 20px;
`;

const LaterButton = styled.button`
    width: 130px;
    height: 40px;
    margin: 0 20px;

    background-color: #E9ECEF;
    border: 1px solid transparent;
    font-size: 13px;

    border-radius: 5px;
`;

const GoToDetailButton = styled.button`
    width: 130px;
    height: 40px;
    margin: 0 20px;

    color: white;
    background-color: #FD7E14;
    border: 1px solid transparent;
    font-size: 13px;

    border-radius: 5px;
`;

export default SignupComplete;