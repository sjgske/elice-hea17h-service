import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '../../components/Box';
import Badge from '../../components/Badge';
import Button from '../../components/Button';
import DietTheme from '../../components/DietInfo/DietTheme';
import ImageBadge from '../../components/DietInfo/ImageBadge';
import convertDate from '../../utils';

function CoachingWrite() {
    const navigate = useNavigate();
    const [dietInfo, setDietInfo] = useState([]);
    const { dietId } = useParams();
    const [comment, setComment] = useState('');

    const getData = async () => {
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImppaG85OSIsIm5hbWUiOiLso7zsp4DtmLgiLCJpYXQiOjE2NTc3OTQ5MTR9.2MNs_EKH7A6hMVNaAORWtb7o9D3JnRJtiopI0jz6DrY';
        const { data } = await axios.get(
            'http://localhost:5000/diets/getAllDiet',
            {
                headers: {
                    userToken: token,
                },
            },
        );

        const obj = data.payload.payload.find(diet => diet._id === dietId);
        setDietInfo(obj);
    };

    const inputComment = e => {
        setComment(e.target.value);
    };

    const addComment = async () => {
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImppaG85OSIsIm5hbWUiOiLso7zsp4DtmLgiLCJpYXQiOjE2NTc3OTQ5MTR9.2MNs_EKH7A6hMVNaAORWtb7o9D3JnRJtiopI0jz6DrY';

        const res = await axios.post(
            'http://localhost:5000/diets/addComment',
            {
                dietId: dietInfo._id,
                comment,
            },
            {
                headers: {
                    userToken: token,
                },
            },
        );

        if (res.status === 200) {
            navigate(`/coachingRead/${dietInfo._id}`);
        } else {
            // 나중에 에러 처리
            console.log('ERROR');
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <MainContainer>
            <h2>코칭</h2>
            <Box width="100%" color="white">
                <Container>
                    <DietTheme
                        key={dietInfo._id}
                        date={convertDate(dietInfo.createdAt)}
                        name={dietInfo.name}
                        totalCalories={dietInfo.totalCalories}
                    />
                    <Box width="75%" color="#F5F5F5">
                        {dietInfo.dietFoods &&
                            dietInfo.dietFoods.map((meal, index) => (
                                <DietContainer key={meal._id}>
                                    <ImageBadge
                                        imgUrl={
                                            dietInfo.dietFoods[index].mainImg
                                        }
                                    />
                                    <p>{meal.mealType}</p>
                                    <div>
                                        <Category>
                                            <div>
                                                <h3>고기</h3>
                                                <Badge
                                                    width="6.5rem"
                                                    fontColor="#999999"
                                                >
                                                    164.9 kcal
                                                </Badge>
                                            </div>
                                            <Badge
                                                width="15.5rem"
                                                fontColor="#999999"
                                            >
                                                닭가슴살(100)g X 1 = 165.9 kcal
                                            </Badge>
                                        </Category>
                                        <Category>
                                            <h3>채소</h3>
                                            <Badge
                                                width="17rem"
                                                fontColor="#999999"
                                            >
                                                방울토마토(100g) X 3 = 0.018
                                                kcal
                                            </Badge>
                                        </Category>
                                        <Category>
                                            <h3>견과</h3>
                                            <Badge
                                                width="13rem"
                                                fontColor="#999999"
                                            >
                                                아몬드(1알) X 10 = 70 kcal
                                            </Badge>
                                        </Category>
                                        <TotalCalorie>
                                            <h3>총합</h3>
                                            <Badge
                                                width="6.5rem"
                                                fontColor="#999999"
                                            >
                                                {
                                                    dietInfo.dietFoods[index]
                                                        .mealCalories
                                                }{' '}
                                                kcal
                                            </Badge>
                                        </TotalCalorie>
                                    </div>
                                </DietContainer>
                            ))}
                    </Box>
                    <UserInfo>
                        <h3>회원정보</h3>
                        <div>
                            <p>키(cm)</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                180
                            </InfoBox>
                            <p>몸무게(kg)</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                80
                            </InfoBox>
                            <p>나이</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                20
                            </InfoBox>
                            <p>성별</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                남자
                            </InfoBox>
                            <p>BMI(kg/m²)</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                24.69
                            </InfoBox>
                            <p>다이어트 목표</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                현재 체중 유지하기
                            </InfoBox>
                            <p>활동 정도</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                매우 활동적
                            </InfoBox>
                            <p>RDI(kcal)</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                3800
                            </InfoBox>
                        </div>
                    </UserInfo>
                    <Comment>
                        <h3>코멘트 작성</h3>
                        <textarea onChange={inputComment} />
                        <div>
                            <Button
                                width="10rem"
                                color="#51CF66"
                                onClick={addComment}
                            >
                                작성 완료
                            </Button>
                        </div>
                    </Comment>
                </Container>
            </Box>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    width: 85vw;
    margin: 50px auto 0;

    & > h2 {
        margin-bottom: 20px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 50px 0;
`;

const DietContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Category = styled.div`
    margin: 20px 0;

    & > div {
        display: flex;
        gap: 10px;
        margin-bottom: 5px;
    }

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`;

const TotalCalorie = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        font-size: 0.7rem;
        gap: 0;
    }
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;

    & > div {
        margin-top: 20px;
    }

    & > div > p {
        margin-bottom: 5px;
    }
`;

const InfoBox = styled(Box)`
    font-size: 0.8rem;
    color: #999999;
    padding-left: 7px;
    margin-bottom: 5px;
    line-height: 1.5rem;
`;

const Comment = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > textarea {
        width: 100%;
        height: 200px;
        resize: none;
        outline: none;
        border: 1px solid #d9d9d9;
    }

    & > div {
        margin: 0 auto;
    }
`;

export default CoachingWrite;
