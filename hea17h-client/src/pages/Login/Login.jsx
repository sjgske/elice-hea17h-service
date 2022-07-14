import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <LoginContainer>
                <h1 style={{ marginTop: '20px' }}>로그인</h1>
                <InputForm>
                    <InputText>아이디</InputText>
                    <InputItem />
                </InputForm>
                <InputForm>
                    <InputText>비밀번호</InputText>
                    <InputItem />
                </InputForm>
                <SocialLoginButton>
                    <GoogleButton>
                        Google 계정으로 로그인
                    </GoogleButton>
                    <KakaoButton>
                        카카오 계정으로 로그인
                    </KakaoButton>
                    <NaverButton>
                        네이버 계정으로 로그인
                    </NaverButton>
                </SocialLoginButton>
                    <LoginButton>
                        로그인
                    </LoginButton>
                    <CreateIdButton>
                        계정 생성하기
                    </CreateIdButton>
            </LoginContainer>
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

const LoginContainer = styled.div`
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
    margin: 10px auto;
    width: 400px;
    height: 80px;

    font-size: medium;
    display: block;
`;

const InputText = styled.h4`
    margin-left: 50px;
    text-align: left;

    margin-bottom: 5px;
`;

const InputItem = styled.input`
    width: 300px;
    height: 40px;
`;

const SocialLoginButton = styled.div`
    margin: 40px auto ;
`;

const GoogleButton = styled.button`
    margin: 5px 0;
    width: 300px;
    height: 40px;

    background-color: white;
    border: 1px solid gray;

    font-weight: 600;
    font-size: 14px;

    border-radius: 5px;
`;

const KakaoButton = styled.button`
    margin: 5px 0;
    width: 300px;
    height: 40px;

    background-color: #F7E600;
    border: 1px solid transparent;

    font-weight: 600;
    font-size: 14px;
    
    border-radius: 5px;
`;

const NaverButton = styled.button`
    margin: 5px 0;
    width: 300px;
    height: 40px;

    background-color: white;
    border: 1px solid #2DB400;
    color: #2DB400;

    font-weight: 600;
    font-size: 14px;
    
    border-radius: 5px;
`;

const LoginButton = styled.button`
    width: 130px;
    height: 50px;
    margin: 0 180px;

    color: white;
    background-color: #51cf66;
    border: 1px solid transparent;
    font-size: medium;

    border-radius: 5px;
`;

const CreateIdButton = styled.button`
    border: none;
    background-color: inherit;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;

    text-decoration: underline;
    color: #999999;
`;

export default Login;