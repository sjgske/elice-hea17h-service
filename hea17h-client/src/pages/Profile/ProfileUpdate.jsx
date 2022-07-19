import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../../components/Nav/index';
import * as Api from '../../api';

/* 
    아이디, Gender, BMI, RDI 변경 불가
*/
function ProfileUpdate() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});
    const [certifyInfo, setCertifyInfo] = useState('');
    const {
        id,
        password,
        name,
        height,
        weight,
        age,
        gender,
        goal,
        activeLevel
    } = userInfo;

    const getInfo = async () => {
        const { data } = await Api.get('/users/getUser');
        
        setUserInfo(data);
    };

    const getCertify = async () => {
        const { data }  = await Api.get('/users/getExpertInfo');

        setCertifyInfo(data.payload.certificate[0].name);
    };

    useEffect(() => {
        getInfo();
        getCertify();
    }, []);

    const handleUserInfo = (e) => {
        setUserInfo((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSaveButton = async (e) => {
        e.preventDefault();

        try {
            const data = {
                id,
                password,
                name,
                height,
                weight,
                age,
                gender,
                goal,
                activeLevel
            };
            
            await Api.patch('/users/updateUser', data);

            alert("회원 수정이 완료되었습니다.")
            navigate('/', { replace: true });
        } catch (err) {
            console.log('상세정보 입력 실패', err);
        }
    };


    return (
        <>
            <Nav />
            <Container>
                <Title>회원정보 수정</Title>
                <ProfileContainer>
                    <BoxContainer>
                        <TitleText>기본 회원정보 <span style={{color: '#999999'}}>필수</span></TitleText>
                        <InputForm>
                            <InputText>아이디</InputText>
                            <InputItem value={id || ''} disabled />
                            <InputText>비밀번호</InputText>
                            <InputItem
                                name='password'
                                type='password'
                                onChange={handleUserInfo}
                            />
                            <InputText>이름</InputText>
                            <InputItem
                                name='name'
                                value={name || ''}
                                onChange={handleUserInfo}
                            />
                        </InputForm>
                    </BoxContainer>
                    <BoxContainer>
                        <TitleText>상세 회원정보 <span style={{ color: '#999999' }}>선택</span></TitleText>
                        <InputForm>
                            <InputText>키(cm)</InputText>
                            <InputItem
                                name='height'
                                value={height || ''}
                                onChange={handleUserInfo}
                            />
                            <InputText>몸무게(kg)</InputText>
                            <InputItem
                                name='weight'
                                value={weight || ''}
                                onChange={handleUserInfo}
                            />
                            <InputText>나이</InputText>
                            <InputItem
                                name='age'
                                value={age || ''}
                                onChange={handleUserInfo}
                            />
                            <InputText>성별</InputText>
                            <SelectGender>
                                <RadioButton type="radio" checked={gender === 'M'} readOnly />
                                <div>남자</div>
                                <RadioButton type="radio" checked={gender === 'W'} readOnly />
                                <div>여자</div>
                            </SelectGender>
                            <InputText>BMI(㎏/㎡)</InputText>
                            <InputItem placeholder='(자동계산)' disabled />
                            <InputText>다이어트 목표</InputText>
                            <SelectBox value={goal || ''} name='goal' onChange={handleUserInfo}>
                                <option value="1">체중 증가</option>
                                <option value="2">현재 체중 유지하기</option>
                                <option value="3">체중 감소</option>
                            </SelectBox>
                            <InputText>활동 정도</InputText>
                            <SelectBox value={activeLevel || ''} name='activeLevel' onChange={handleUserInfo}>
                                <option value="1">전혀 운동하지 않음</option>
                                <option value="2">가벼운 운동(주 1~3일)</option>
                                <option value="3">적당한 운동(주 3~5일)</option>
                                <option value="4">격렬한 운동(주 6~7일)</option>
                            </SelectBox>
                            <InputText>RDI(kcal)  <span style={{color: "#999999"}}>*일일권장섭취량</span></InputText>
                            <InputItem placeholder='(자동계산)' disabled />
                            {
                                userInfo.role === 'expert'
                                    ? (
                                        <>
                                            <InputText>전문가 인증</InputText>
                                            <InputItem color='#51CF66' placeholder='인증받은 아이디입니다.' disabled />
                                        </>
                                    )
                                    : (
                                        <>
                                            <InputText>전문가 인증</InputText>
                                            <InputItem color='#FD7E14' placeholder='인증되지 않은 아이디입니다.' disabled />
                                        </>
                                    )
                            }
                            {
                                userInfo.role === 'expert'
                                    ? (
                                        <>
                                            <InputText>경력 및 자격사항</InputText>
                                            <InputItem value={certifyInfo} disabled />
                                        </>
                                    )
                                    : null
                            }
                        </InputForm>
                    </BoxContainer>
                </ProfileContainer>
                <Buttons>
                    <UpdateButton onClick={handleSaveButton}>저장하기</UpdateButton>
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
    color: ${(props) => props.color};

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
`;

export default ProfileUpdate;