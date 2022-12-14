import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from '../../slices/UserSlice';
import * as Api from '../../api';
// import { validateId } from '../../utils/UsefulFunction';

const KAKAO_AUTH_URL = process.env.REACT_APP_KAKAO_AUTH_URL;
const NAVER_AUTH_URL = process.env.REACT_APP_NAVER_AUTH_URL;

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const handleIsCorrect = () => {
        setIsCorrect(!isCorrect);
    };

    const handleLogin = async e => {
        e.preventDefault();

        if (id === '' || password === '') {
            alert('아이디와 비밀번호를 입력해주세요.');
        } else {
            try {
                const data = { id, password };
                const res = await Api.post('/users', data);
                const jwtToken = res.data.token;
                localStorage.setItem('userToken', jwtToken);
                dispatch(login(data));

                navigate('/', { replace: true });
            } catch (err) {
                console.log('로그인 실패', err);
                handleIsCorrect();
            }
        }
    };

    const handleRegisterButton = () => {
        navigate('/signup');
    };

    return (
        <Container>
            <LoginContainer>
                <h1 style={{ marginTop: '40px' }}>로그인</h1>
                <InputForm>
                    <InputText>아이디</InputText>
                    <InputItem
                        onChange={e => {
                            setId(e.target.value);
                        }}
                    />
                </InputForm>
                <InputForm>
                    <InputText>비밀번호</InputText>
                    <InputItem
                        type="password"
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                    />
                    {isCorrect && (
                        <WrongPassword>
                            비밀번호가 일치하지 않습니다.
                        </WrongPassword>
                    )}
                </InputForm>
                <SocialLoginButton>
                    <a href={KAKAO_AUTH_URL}>
                        <KakaoButton>카카오 계정으로 로그인</KakaoButton>
                    </a>

                    <a href={NAVER_AUTH_URL}>
                        <NaverButton>네이버 계정으로 로그인</NaverButton>
                    </a>
                </SocialLoginButton>
                <LoginButton onClick={handleLogin}>로그인</LoginButton>
                <CreateIdButton onClick={handleRegisterButton}>
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
    margin: 0 auto;
    margin-top: 20px;
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

const WrongPassword = styled.h4`
    color: red;
    font-weight: 400;

    float: left;
    margin-left: 50px;
`;

const SocialLoginButton = styled.div`
    margin: 40px auto;
`;

const KakaoButton = styled.button`
    margin: 5px 0;
    width: 300px;
    height: 40px;

    background-color: #f7e600;
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
    border: 1px solid #2db400;
    color: #2db400;

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
