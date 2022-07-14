import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav/index';

function Profile() {
    return (
        <>
            <Nav />
            <Container>
                <Title>회원정보</Title>
                <ProfileContainer>
                    <BoxContainer>
                        <TitleText>기본 회원정보 <span style={{color: '#999999'}}>필수</span></TitleText>
                        <InputForm>
                            <InputText>아이디</InputText>
                            <InputItem placeholder='younghwan101' />
                            <InputText>비밀번호</InputText>
                            <InputItem placeholder='****' />
                            <InputText>이름</InputText>
                            <InputItem placeholder='조영환'/>
                        </InputForm>
                    </BoxContainer>
                    <BoxContainer>
                        <TitleText>상세 회원정보 <span style={{ color: '#999999' }}>선택</span></TitleText>
                        <InputForm>
                            <InputText>키(cm)</InputText>
                            <InputItem placeholder='180' />
                            <InputText>몸무게(kg)</InputText>
                            <InputItem placeholder='80' />
                            <InputText>나이</InputText>
                            <InputItem placeholder='20' />
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
                            <InputText>전문가 인증</InputText>
                            <InputItem style={{ color: '#51CF66' }} placeholder='인증받은 아이디입니다.' />
                            <InputText>경력 및 자격사항</InputText>
                            <InputItem placeholder='생활스포츠지도사 2급' />
                        </InputForm>
                    </BoxContainer>
                </ProfileContainer>
                <Buttons>
                    <UpdateButton>회원정보 수정</UpdateButton>
                    <ResignButton>회원탈퇴</ResignButton>
                </Buttons>
            </Container>
        </>
    );
}

const Container = styled.div`
    position: absolute;
    display: flex;
    margin: 0 auto;
    padding: 0;
    background-color: #EFEFEF;
    
    width: 100%;
    height: 150%;

    flex-direction: column;
`;

const ProfileContainer = styled.div`
    margin: 0 auto;
    margin-bottom: 50px;
    background-color: white;
    width: 80%;
    height: 1150px;

    justify-content: center;
    align-items: center;
    text-align: center;

    box-shadow: 10px 5px 5px lightgray;
`;

const BoxContainer = styled.div`
    height: 280px;
`;

const Title = styled.h2`
    margin: 30px 10%;
`;

const TitleText = styled.h2`
    margin: 20px 30px;
    text-align: left;
`;

const InputForm = styled.form`
    margin: 0 35px;
    width: 400px;

    font-size: medium;
    display: block;
`; 

const InputText = styled.h4`
    text-align: left;

    margin: 7px auto;
`;

const InputItem = styled.input`
    margin-left: -100px;
    width: 300px;
    height: 35px;

    border: 1px solid #dbdbdb;

    padding-left: 10px;
    margin-bottom: 1px;
`;

const SelectGender = styled.div`
    display: flex;
`;

const RadioButton = styled.input`
    margin: 0 5px;
`;

const SelectBox = styled.select`
    margin-left: -100px;
    width: 300px;
    height: 35px;
    color: gray;

    border: 1px solid #dbdbdb;
`;

const Buttons = styled.div`
    text-align: center;
`;

const UpdateButton = styled.button`
    width: 150px;
    height: 50px;

    color: white;
    background-color: #3CB371;
    border: 1px solid transparent;
    font-size: medium;

    border-radius: 5px;
    margin: 0 2%;
`;

const ResignButton = styled.button`
    width: 150px;
    height: 50px;

    color: white;
    background-color: #FD7E14;
    border: 1px solid transparent;
    font-size: medium;

    border-radius: 5px;
    margin: 0 2%;
`;

export default Profile;