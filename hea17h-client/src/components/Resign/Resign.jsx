import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/index';
import * as Api from '../../api';

function Resign(props) {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const { onClose } = props;

    const handleIsCorrect = () => {
        setIsCorrect(!isCorrect);
    };

    const handleDeleteUser = async (e) => {
        e.preventDefault();

        if (id === '' || password === '') {
            alert("아이디와 비밀번호를 입력해주세요.");
            
        } else {
            try {
                const data = { id, password };
                await Api.delete('/users/deleteUser', data);
                localStorage.removeItem('userToken');
                navigate('/', { replace: true });
            } catch (err) {
                console.log('회원 탈퇴 실패', err);
                handleIsCorrect();
            }
        }
    };

    return (
        <ResignModal width='500px' height='450px'>
            <Title>회원탈퇴</Title>
            <InputForm>
                <InputText>아이디</InputText>
                <InputItem
                    placeholder='아이디'
                    onChange={(e) => {
                        setId(e.target.value);
                    }}
                />
                <InputText>비밀번호</InputText>
                <InputItem
                    type='password'
                    placeholder='비밀번호'
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                {
                    isCorrect && (
                        <WrongPassword>비밀번호가 일치하지 않습니다.</WrongPassword>
                    )
                }
            </InputForm>
            <CheckResign>회원 탈퇴 시 복구할 수 없습니다. 정말 탈퇴하시겠습니까?</CheckResign>
            <ResignButton onClick={handleDeleteUser}>회원탈퇴</ResignButton>
            <IconButton
                onClick={onClose}
            >
                <FontAwesomeIcon icon={faXmark} />
            </IconButton>
        </ResignModal>
    );
};

const ResignModal = styled(Modal)`

`; 

const Title = styled.h2`
    text-align: center;
`;

const InputForm = styled.form`
    margin: 0 auto;
    width: 400px;

    font-size: medium;
    display: block;
`; 

const InputText = styled.h4`
    text-align: left;

    margin: 7px auto;
`;

const InputItem = styled.input`
    width: 400px;
    height: 40px;

    border: 1px solid #dbdbdb;

    padding-left: 10px;
    margin-bottom: 1px;
`;

const WrongPassword = styled.h4`
    color: red;
    font-weight: 400;

    float: left;
`;

const CheckResign = styled.h4`
    color: red;
    margin: 10px auto;
    margin-top: 60px;
`;

const ResignButton = styled.button`
    width: 150px;
    height: 50px;

    color: white;
    background-color: #FD7E14;
    border: 1px solid transparent;
    font-size: large;

    border-radius: 5px;
    margin: 20px auto;
`;

const IconButton = styled.button`
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    font-size: 1.2rem;
`;

export default Resign;