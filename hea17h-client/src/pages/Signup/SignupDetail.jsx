import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as Api from '../../api';

function SignupDetail() {
    const navigate = useNavigate();
    const id = useLocation().state;

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('M');
    const [BMI, setBMI] = useState(0);
    const [goal, setGoal] = useState(1);
    const [activeLevel, setActiveLevel] = useState(1);
    const [RDI, setRDI] = useState(0);

    const calBMI = () => {
        setBMI(((weight / height ** 2) * 10000).toFixed(2));
    };

    const calRDI = () => {
        let BMR = 0;
        if (gender === 'M')
            BMR = 655 + ((9.6 * weight) + (1.8 * height)) - (4.7 * age);
        else if (gender === 'W')
            BMR = 66 + ((13.7 * weight) + (5 * height)) - (6.5 * age);
        
        switch (activeLevel) {
            case 1:
                setRDI(BMR * 1.2);
                break;
            case 2:
                setRDI(BMR * 1.3);
                break;
            case 3:
                setRDI(BMR * 1.5);
                break;
            case 4:
                setRDI(BMR * 1.7);
                break;
            default:
                setRDI(BMR * 1.2);
                break;
        }
    };

    useEffect(() => {
        calBMI();
        calRDI();
    });

    const handleRegisterDetail = async (e) => {
        e.preventDefault();

        try {
            const data = {
                id,
                height,
                weight,
                age,
                gender,
                goal,
                activeLevel
            };
            
            await Api.patch('/users/signUpDetail', data);

            navigate('/login', { replace: true });
        } catch (err) {
            console.log('상세정보 입력 실패', err);
        }
    };

    return (
        <Container>
            <SignupDetailContainer>
                <h2 style={{ marginTop: '20px' }}>상세정보</h2>
                <InputForm>
                    <InputText>키(cm)</InputText>
                    <InputItem
                        onChange={(e) => {
                            setHeight(e.target.value);
                        }}
                        placeholder='키'
                        value={height}
                    />
                    <InputText>몸무게(kg)</InputText>
                    <InputItem
                        onChange={(e) => {
                            setWeight(e.target.value);
                        }}
                        placeholder='몸무게'
                        value={weight}
                    />
                    <InputText>나이</InputText>
                    <InputItem
                        onChange={(e) => {
                            setAge(e.target.value);
                            setTimeout(calBMI, 1000);
                        }}
                        placeholder='나이'
                        value={age}
                    />
                    <InputText>성별</InputText>
                    <SelectGender>
                        <RadioButton
                            type="radio"
                            name="gender"
                            value="M"
                            onChange={(e) => {
                                setGender(e.target.value);
                            }}
                        />
                        <div>남자</div>
                        <RadioButton
                            type="radio"
                            name="gender"
                            value="W"
                            onChange={(e) => {
                                setGender(e.target.value);
                            }}
                        />
                        <div>여자</div>
                    </SelectGender>
                    <InputText>BMI(㎏/㎡)</InputText>
                    <InputItem
                        value={BMI}
                        disabled
                    />
                    <InputText>다이어트 목표</InputText>
                    <SelectBox 
                        onChange={(e) => {
                            setGoal(e.target.value);
                        }}
                        value={goal}
                    >
                        <option value="1">체중 증가</option>
                        <option value="2">현재 체중 유지하기</option>
                        <option value="3">체중 감소</option>
                    </SelectBox>
                    <InputText>활동 정도</InputText>
                    <SelectBox
                        onChange={(e) => {
                            setActiveLevel(e.target.value);
                        }}
                        value={activeLevel}
                    >
                        <option value="1">전혀 운동하지 않음</option>
                        <option value="2">가벼운 운동(주 1~3일)</option>
                        <option value="3">적당한 운동(주 3~5일)</option>
                        <option value="4">격렬한 운동(주 6~7일)</option>
                    </SelectBox>
                    <InputText>RDI(kcal)  <span style={{color: "#999999"}}>*일일권장섭취량</span></InputText>
                    <InputItem
                        value={RDI}
                        disabled
                    />
                    <CompleteButton onClick={handleRegisterDetail}>입력완료</CompleteButton>
                </InputForm>
            </SignupDetailContainer>
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

const SignupDetailContainer = styled.div`
    margin: auto;
    background-color: white;
    width: 600px;
    height: 85%;

    justify-content: center;
    align-items: center;
    text-align: center;

    box-shadow: 10px 5px 5px lightgray;
`;

const InputForm = styled.form`
    margin: 10px auto;
    width: 400px;
    height: 600px;

    font-size: medium;
    display: block;
`; 

const InputText = styled.h5`
    margin: 10px auto;
    margin-left: 50px;
    text-align: left;
`;

const InputItem = styled.input`
    width: 300px;
    height: 40px;

    border: 1px solid #dbdbdb;

    padding-left: 10px;
`;

const SelectGender = styled.div`
    display: flex;

    margin-left: 45px;
`;

const RadioButton = styled.input`
    margin: 0 5px;
`;

const SelectBox = styled.select`
    margin: 0 auto;
    width: 300px;
    height: 35px;
    color: gray;

    border: 1px solid #dbdbdb;

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;

const CompleteButton = styled.button`
    width: 130px;
    height: 50px;
    margin: 50px 30%;

    color: white;
    background-color: #FD7E14;
    border: 1px solid transparent;
    font-size: medium;

    border-radius: 5px;
`;


export default SignupDetail;