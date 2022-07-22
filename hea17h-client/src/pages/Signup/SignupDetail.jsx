import React from 'react';
import styled from 'styled-components';

function SignupDetail() {
    return (
        <Container>
            <SignupDetailContainer>
                <h2 style={{ marginTop: '20px' }}>상세정보</h2>
                <InputForm>
                    <InputText>키(cm)</InputText>
                    <InputItem placeholder='키'/>
                    <InputText>몸무게(kg)</InputText>
                    <InputItem placeholder='몸무게'/>
                    <InputText>나이</InputText>
                    <InputItem placeholder='나이' />
                    <InputText>성별</InputText>
                    <SelectGender>
                        <RadioButton type="radio" />
                        <div>남자</div>
                        <RadioButton type="radio" />
                        <div>여자</div>
                    </SelectGender>
                    <InputText>BMI(㎏/㎡)</InputText>
                    <InputItem placeholder='(자동계산)' />
                    <InputText>다이어트 목표</InputText>
                    <SelectBox>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </SelectBox>
                    <InputText>활동 정도</InputText>
                    <SelectBox>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </SelectBox>
                    <InputText>RDI(kcal)  <span style={{color: "#999999"}}>*일일권장섭취량</span></InputText>
                    <InputItem placeholder='(자동계산)' />
                    <CompleteButton>입력완료</CompleteButton>
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