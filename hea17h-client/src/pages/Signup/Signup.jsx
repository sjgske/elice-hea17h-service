/* eslint no-underscore-dangle: 0 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as Api from '../../api';

function Signup() {
    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [name, setName] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        if (id === '' || password === '') {
            alert("아이디와 비밀번호를 입력해주세요.");
        } else if (name === '') {
            alert("이름을 입력해주세요.");
        } else {
            try {
                const data = { id, password, name };
                await Api.post(`/users/signUp`, data);

                navigate('/signup/complete', { state: id }, { replace: true });
            } catch (err) {
                console.log('회원가입 실패', err);
            }
        }
    };

    return (
        <Container>
            <SignupContainer>
                <h1 style={{ marginTop: '20px' }}>회원가입</h1>
                <InputForm>
                    <InputText>아이디</InputText>
                    <InputItem
                        placeholder='아이디'
                        onChange={(e) => {
                            setId(e.target.value);
                        }}
                        value={id}
                    />
                </InputForm>
                <InputForm>
                    <InputText>비밀번호</InputText>
                    <InputItem
                        type='password'
                        placeholder='비밀번호'
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                    />
                </InputForm>
                <InputForm>
                    <InputText>비밀번호 확인</InputText>
                    <InputItem
                        type='password'
                        placeholder='비밀번호 확인'
                        onChange={(e) => {
                            setCheckPassword(e.target.value);
                        }}
                        value={checkPassword}
                    />
                </InputForm>
                <InputForm>
                    <InputText>이름</InputText>
                    <InputItem
                        placeholder='이름'
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        value={name}
                    />
                </InputForm>
                <SignupButton
                    onClick={handleRegister}
                >가입하기</SignupButton>
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
    margin-top: 25px;
    width: 400px;
    height: 70px;

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